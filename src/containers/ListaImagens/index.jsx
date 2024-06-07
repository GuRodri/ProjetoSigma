import React, { useState, useEffect } from 'react';
import { storage, db } from '../../firebase/firebaseConfig'; 
import { ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import {
  Container,
  Title,
  List,
  ListItem,
  Image,
  Description
} from './style'; 

const ListaImagens = () => {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const produtosSnapshot = await getDocs(collection(db, "Produto"));
        console.log("Produtos:", produtosSnapshot.docs.map(doc => doc.data())); // Log dos dados dos produtos

        const anunciosSnapshot = await getDocs(collection(db, "Anuncio"));
        console.log("Anúncios:", anunciosSnapshot.docs.map(doc => doc.data())); // Log dos dados dos anúncios

        const jogosSnapshot = await getDocs(collection(db, "Jogo"));
        console.log("Jogos:", jogosSnapshot.docs.map(doc => doc.data())); // Log dos dados dos jogos

        const produtos = produtosSnapshot.docs.map(doc => ({ tipo: 'Produto', id: doc.id, ...doc.data() }));
        const anuncios = anunciosSnapshot.docs.map(doc => ({ tipo: 'Anúncio', id: doc.id, ...doc.data() }));
        const jogos = jogosSnapshot.docs.map(doc => ({ tipo: 'Jogo', id: doc.id, ...doc.data() }));

        const imagens = [...produtos, ...anuncios, ...jogos];
        console.log("Imagens antes das URLs:", imagens); // Log das imagens antes de adicionar as URLs

        // Mapeando os dados para adicionar as URLs das imagens
        const imagensComUrls = await Promise.all(imagens.map(async imagem => {
          if (imagem.referenciasImagemJogo) {
            // Se houver referências de imagens para jogos
            const imagensComUrls = await Promise.all(imagem.referenciasImagemJogo.map(async img => {
              const url = await getDownloadURL(ref(storage, img.url)); // Ajuste o caminho conforme sua estrutura no storage
              return { ...img, url };
            }));
            return { ...imagem, referenciasImagemJogo: imagensComUrls };
          }
          return imagem;
        }));

        console.log("Imagens depois das URLs:", imagensComUrls); // Log das imagens após adicionar as URLs

        setImagens(imagensComUrls);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar documentos: ", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Title>Listagem de Imagens</Title>
      <List>
        {imagens.map((imagem, index) => (
          <ListItem key={index}>
            <h2>{imagem.tipo}</h2>
            <Description>ID: {imagem.id}</Description>
            <Description>Outro Campo: {imagem.outroCampo}</Description>
            {imagem.referenciasImagemJogo && imagem.referenciasImagemJogo.map((image, idx) => (
              <div key={idx}>
                <Image src={image.url} alt={`Imagem ${idx + 1}`} />
                <Description>Nome: {image.name}</Description>
                <Description>Descrição: {image.description}</Description>
              </div>
            ))}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ListaImagens;
