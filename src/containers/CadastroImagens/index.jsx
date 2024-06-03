// src/components/Cadastro.js
import React, { useState, useRef } from 'react';
import { storage, db } from '../../firebase/firebaseConfig'; // Importe o storage e o db do arquivo 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import {
  Container,
  Title,
  Select,
  Input,
  FileInputContainer,
  FileInput,
  Thumbnail,
  RemoveButton,
  UploadButton,
  Progress,
  ImageLink,
  SuccessMessage
} from './style';

const Cadastro = () => {
  const [images, setImages] = useState([null, null, null]);
  const [imagePreviews, setImagePreviews] = useState(['', '', '']);
  const [progresses, setProgresses] = useState([0, 0, 0]);
  const [urls, setUrls] = useState(['', '', '']);
  const [fileNames, setFileNames] = useState(['', '', '']);
  const [descriptions, setDescriptions] = useState(['', '', '']);
  const [tipo, setTipo] = useState('produto');
  const [id, setId] = useState('');
  const [success, setSuccess] = useState(false);

  const fileInputRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  const handleChange = (index, e) => {
    const newImages = [...images];
    const newPreviews = [...imagePreviews];
    const newFileNames = [...fileNames];
    if (e.target.files[0]) {
      newImages[index] = e.target.files[0];
      newPreviews[index] = URL.createObjectURL(e.target.files[0]);
      newFileNames[index] = e.target.files[0].name;
      setImages(newImages);
      setImagePreviews(newPreviews);
      setFileNames(newFileNames);
    }
  };

  const handleRemove = (index) => {
    const newImages = [...images];
    const newPreviews = [...imagePreviews];
    const newFileNames = [...fileNames];
    const newDescriptions = [...descriptions];
    newImages[index] = null;
    newPreviews[index] = '';
    newFileNames[index] = '';
    newDescriptions[index] = '';
    setImages(newImages);
    setImagePreviews(newPreviews);
    setFileNames(newFileNames);
    setDescriptions(newDescriptions);

    if (fileInputRefs.current[index].current) {
      fileInputRefs.current[index].current.value = '';
    }
  };

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleDescriptionChange = (index, e) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = e.target.value;
    setDescriptions(newDescriptions);
  };

  const handleUpload = () => {
    if (id && images.some(img => img !== null)) {
      const uploadPromises = images.map((image, index) => {
        if (image) {
          return new Promise((resolve, reject) => {
            const storageRef = ref(storage, `images/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
              "state_changed",
              snapshot => {
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                const newProgresses = [...progresses];
                newProgresses[index] = progress;
                setProgresses(newProgresses);
              },
              error => {
                console.error("Error uploading file:", error);
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                  const newUrls = [...urls];
                  newUrls[index] = downloadURL;
                  setUrls(newUrls);
                  resolve();
                }).catch(reject);
              }
            );
          });
        } else {
          return Promise.resolve();
        }
      });

      Promise.all(uploadPromises)
        .then(() => {
          const validUrls = urls.filter(url => url !== '');
          const imageInfos = validUrls.map((url, index) => ({
            url,
            name: fileNames[index],
            description: descriptions[index]
          }));
          return cadastrarNoFirestore(imageInfos);
        })
        .then(() => {
          setSuccess(true);
          alert('Cadastro realizado com sucesso!');
        })
        .catch(error => {
          console.error("Error uploading files:", error);
          alert('Erro ao enviar arquivos');
        });
    } else {
      alert("Por favor, escolha pelo menos um arquivo e insira um ID!");
    }
  };

  const cadastrarNoFirestore = async (imageInfos) => {
    try {
      if (tipo === 'produto') {
        await addDoc(collection(db, "Produto"), {
          idProduto: id,
          imagensProduto: imageInfos
        });
      } else if (tipo === 'anuncio') {
        await addDoc(collection(db, "Anuncio"), {
          idAnuncio: id,
          referenciasImagem: imageInfos
        });
      } else if (tipo === 'jogo') {
        await addDoc(collection(db, "Jogo"), {
          idJogo: id,
          referenciasImagemJogo: imageInfos
        });
      }
    } catch (error) {
      console.error("Erro ao cadastrar no Firestore: ", error);
      alert('Erro ao cadastrar no Firestore');
    }
  };

  return (
    <Container>
      <Title>Cadastro de Imagens</Title>
      <Select onChange={handleTipoChange} value={tipo}>
        <option value="produto">Produto</option>
        <option value="anuncio">Anuncio</option>
        <option value="jogo">Jogo</option>
      </Select>
      <Input 
        type="text" 
        placeholder="Insira o ID" 
        value={id} 
        onChange={handleIdChange} 
      />
      {[0, 1, 2].map((index) => (
        <FileInputContainer key={index}>
          <FileInput
            type="file"
            onChange={(e) => handleChange(index, e)}
            ref={fileInputRefs.current[index]}
          />
          {imagePreviews[index] && (
            <>
              <Thumbnail src={imagePreviews[index]} alt={`Preview ${index + 1}`} />
              <RemoveButton onClick={() => handleRemove(index)}>x</RemoveButton>
              <Input 
                type="text" 
                placeholder="Descrição" 
                value={descriptions[index]} 
                onChange={(e) => handleDescriptionChange(index, e)} 
              />
            </>
          )}
        </FileInputContainer>
      ))}
      <UploadButton onClick={handleUpload}>Upload</UploadButton>
    </Container>
  );
};

export default Cadastro;
