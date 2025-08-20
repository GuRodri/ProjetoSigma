import React, { useState, useRef, useEffect } from 'react';
import { storage, db } from '../../../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import apiCliente from '../../../services/apiCliente';
import {
  Container,
  Title,
  Input,
  FileInputContainer,
  FileInput,
  CustomFileInputButton,
  Thumbnail,
  RemoveButton,
  UploadButton,
  Centralizar,
} from './style';
import { useParams } from 'react-router-dom';

const sanitizeInput = (input) => {
  return input.replace(/[<>"/'&;]/g, "");
};

const CadastrarImagemAnuncio = () => {
  const { id } = useParams();
  const [images, setImages] = useState([null, null, null]);
  const [imagePreviews, setImagePreviews] = useState(['', '', '']);
  const [progresses, setProgresses] = useState([0, 0, 0]);
  const [urls, setUrls] = useState(['', '', '']);
  const [fileNames, setFileNames] = useState(['', '', '']);
  const [success, setSuccess] = useState(false);

  const fileInputRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  const resetForm = () => {
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
      newFileNames[index] = `${Date.now()}_${e.target.files[0].name}`;
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

  // Função handleUpload
  const handleUpload = async () => {
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
                    if (downloadURL !== '') {
                      const newUrls = [...urls];
                      newUrls[index] = downloadURL;
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

      await Promise.all(uploadPromises)
        .then((downloadUrls) => {
          const validUrls = downloadUrls.filter(url => url !== null);
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
      alert('Nenhum ID ou imagem válida para cadastrar');
    }
  };

  const cadastrarNoFirestore = async (validUrls) => {
    try {
      const imageInfos = validUrls.map(url => ({ url }));
      if (imageInfos.length === 0) return;
      await addDoc(collection(db, "Anuncio"), {
        idAnuncio: id,
        referenciasImagem: imageInfos
      });
      if (imageInfos[0] && imageInfos[0].url) {
        await apiCliente.patch(`/api/anuncio/${id}/atualizarImagem`, {
          idAnuncio: id,
          referenciaImagem: imageInfos[0].url
        });
      }
      setUrls(['', '', '']);
    } catch (error) {
      console.error("Erro ao cadastrar no Firestore:", error);
      throw error;
    }
  };

  return (
    <Container>
      <Centralizar>
        <Title>Cadastro de Imagens para Anúncio</Title>
        <Input type="text" value={id} disabled />
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

export default CadastrarImagemAnuncio;
