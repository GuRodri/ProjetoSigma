import React, { useState, useRef } from 'react';
import { storage, db } from '../../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

import {
  Container,
  Title,
  Select,
  Input,
  FileInputContainer,
  FileInput,
  CustomFileInputButton,
  Thumbnail,
  RemoveButton,
  UploadButton,
  Centralizar,
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
      newFileNames[index] = `${Date.now()}_${e.target.files[0].name}`; // Adiciona timestamp ao nome do arquivo
      setImages(newImages);
      setImagePreviews(newPreviews);
      setFileNames(newFileNames);
    }
  };

  const handleRemove = (index) => {
    const newImages = [...images];
    const newPreviews = [...imagePreviews];
    const newFileNames = [...fileNames];
    newImages[index] = null;
    newPreviews[index] = '';
    newFileNames[index] = '';
    setImages(newImages);
    setImagePreviews(newPreviews);
    setFileNames(newFileNames);

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

  const handleUpload = async () => {
    // Verifica se o ID já existe
    const docRef = collection(db, tipo === 'produto' ? "Produto" : tipo === 'anuncio' ? "Anuncio" : "Jogo");
    const q = query(docRef, where("idProduto", "==", id));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      alert("ID já cadastrado!");
      return;
    }
    
    // Se não existir, continua com o upload
    if (id && images.some(img => img !== null)) {
      const uploadPromises = images.map((image, index) => {
        if (image) {
          return new Promise((resolve, reject) => {
            const storageRef = ref(storage, `images/${fileNames[index]}`);
            const uploadTask = uploadBytesResumable(storageRef, image);
  
            uploadTask.on(
              "state_changed",
              snapshot => {
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgresses(prevProgresses => {
                  const newProgresses = [...prevProgresses];
                  newProgresses[index] = progress;
                  return newProgresses;
                });
              },
              error => {
                console.error("Error uploading file:", error);
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then(downloadURL => {
                    if (downloadURL !== '') { // Verificar se a URL não está vazia
                      const newUrls = [...urls];
                      newUrls[index] = downloadURL;
                      console.log(`URL da imagem ${index}:`, downloadURL);
                      setUrls(newUrls);
                    }
                    resolve();
                  })
                  .catch(reject);
              }
            );
          });
        } else {
          return Promise.resolve();
        }
      });
  
      Promise.all(uploadPromises)
      .then(() => {
        console.log("URLs das imagens:", urls); // Log das URLs das imagens após o upload
        setSuccess(true);
        cadastrarNoFirestore();
        alert('Cadastro realizado com sucesso!');
        resetForm();
      })
        .catch(error => {
          console.error("Error uploading files:", error);
          alert('Erro ao enviar arquivos');
        });
    } else {
      alert("Por favor, escolha pelo menos um arquivo e insira um ID!");
    }
  };
  
  const resetForm = () => {
    setImages([null, null, null]);
    setImagePreviews(['', '', '']);
    setProgresses([0, 0, 0]);
    setFileNames(['', '', '']);
    setId('');
    setTipo('produto');
    fileInputRefs.current.forEach(ref => {
      if (ref.current) ref.current.value = '';
    });
  };

  const cadastrarNoFirestore = async () => {
    try {
      const validUrls = urls.filter(url => url !== '');
      const imageInfos = validUrls.map(url => ({ url }));
      console.log("Objetos de imagem:", imageInfos); // Log dos objetos de imagem antes do cadastro no Firestore
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
      <Centralizar>
      <Title>Cadastro de Imagens</Title>
      <Select onChange={handleTipoChange} value={tipo} placeholder='tipo de cadastro'>
        <option value="">Selecione o tipo de cadastro</option>
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
     <div style={{ display: "flex", alignItems: "center" }}>
       <div style={{ marginRight: "4em" }}>
         <CustomFileInputButton
           onClick={() => fileInputRefs.current[index].current.click()}
         >
           Escolher Arquivo
         </CustomFileInputButton>
         <FileInput
           type="file"
           onChange={(e) => handleChange(index, e)}
           ref={fileInputRefs.current[index]}
           style={{ display: "none" }}
         />
       </div>
       <div style={{ position: "relative" }}>
         <Thumbnail
           src={imagePreviews[index]}
           alt={` Selecione  ${index + 1}`}
         />
         {progresses[index] > 0 && (
           <div
             style={{
               position: "absolute",
               bottom: 0,
               left: 0,
               width: "100%",
               height: "10px",
               backgroundColor: "#ccc",
               borderRadius: "5px 5px 5px 5px"
             }}
           >
             <div
               style={{
                 width: `${progresses[index]}%`,
                 height: "100%",
                 backgroundColor: "#007bff"
               }}
             ></div>
           </div>
         )}
       </div>
     </div>
     {imagePreviews[index] && (
       <>
         <RemoveButton onClick={() => handleRemove(index)}>x</RemoveButton>
       </>
     )}
   </FileInputContainer>
      ))}
      <UploadButton onClick={handleUpload}>Upload</UploadButton>
      </Centralizar>
    </Container>
  );
};

export default Cadastro;
