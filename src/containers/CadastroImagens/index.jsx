import React, { useState, useRef } from 'react';
import { storage, db } from '../../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import apiCliente from '../../services/apiCliente';

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

  const resetForm = () => {
    setId('');
    setImages([null, null, null]);
    setImagePreviews(['', '', '']);
    setFileNames(['', '', '']);
    setProgresses([0, 0, 0]);
  };

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

    fileInputRefs.current[index].current.value = '';

  };

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  // Função handleUpload
const handleUpload = async () => {
  
  // Verifica se o ID e as imagens são válidas
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
                  resolve(downloadURL);
                })
                .catch(reject);
            }
          );
        });
      } else {
        return Promise.resolve(null);
      }
    });

    // Aguarda o término de todas as operações de upload
    await Promise.all(uploadPromises)
      .then((downloadUrls) => {
        // Remove URLs inválidas (null)
        const validUrls = downloadUrls.filter(url => url !== null);

        // Envia apenas URLs válidas para cadastrar no Firestore
        cadastrarNoFirestore(validUrls)
          .then(() => {
            setSuccess(true);
            alert('Cadastro realizado com sucesso!');
            resetForm();
          })
          .catch(error => {
            console.error("Erro ao cadastrar no Firestore:", error);
            alert('Erro ao cadastrar no Firestore');
          });
      })
      .catch(error => {
        console.error("Error uploading files:", error);
        alert('Erro ao enviar arquivos');
      });
  } else {
    console.error("Nenhum ID ou imagem válida para cadastrar.");
    alert('Nenhum ID ou imagem válida para cadastrar');
  }
};

// Função cadastrarNoFirestore
const cadastrarNoFirestore = async (validUrls) => {
  try {
    console.log("URLs válidos:", validUrls);
    console.log("Tamanho de validUrls:", validUrls.length);
    const imageInfos = validUrls.map(url => ({ url }));

    // Verifica se há pelo menos uma imagem a ser cadastrada
    if (imageInfos.length === 0) {
      console.error("Nenhuma imagem válida para cadastrar.");
      return;
    }

    if (tipo === 'produto') {
      await addDoc(collection(db, "Produto"), {
        idProduto: id,
        imagensProduto: imageInfos
      });

      // Atualizar a tabela Produto no SQL via API usando sua instância apiCliente
      if (imageInfos[0] && imageInfos[0].url) {
        const apiResponse = await apiCliente.patch(`/api/produto/${id}/atualizarImagem`, {
          idProduto: id,
          imagemProduto: imageInfos[0].url
        });
        console.log(apiResponse.data.Message);
      } else {
        console.error("URL da imagem indisponível para atualização na tabela Produto do SQL.");
      }
    } else if (tipo === 'anuncio') {
      await addDoc(collection(db, "Anuncio"), {
        idAnuncio: id,
        referenciasImagem: imageInfos
      });

      // Atualizar a tabela Anuncio no SQL via API usando sua instância apiCliente
      if (imageInfos[0] && imageInfos[0].url) {
        const apiResponse = await apiCliente.patch(`/api/anuncio/${id}/atualizarImagem`, {
          idAnuncio: id,
          imagemAnuncio: imageInfos[0].url
        });
        console.log(apiResponse.data.Message);
      } else {
        console.error("URL da imagem indisponível para atualização na tabela Anuncio do SQL.");
      }
    } else if (tipo === 'jogo') {
      await addDoc(collection(db, "Jogo"), {
        idJogo: id,
        referenciasImagemJogo: imageInfos
      });

      // Atualizar a tabela Jogo no SQL via API usando sua instância apiCliente
      if (imageInfos[0] && imageInfos[0].url) {
        const apiResponse = await apiCliente.patch(`/api/jogo/${id}/atualizarImagem`, {
          idJogo: id,
          referenciaImagemJogo: imageInfos[0].url
        });
        console.log(apiResponse.data.Message);
      } else {
        console.error("URL da imagem indisponível para atualização na tabela Jogo do SQL.");
      }
    }

    // Após o cadastro no Firestore, limpa a variável de URLs
    setUrls(['', '', '']);
  } catch (error) {
    console.error("Erro ao cadastrar no Firestore:", error);
    throw error;
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