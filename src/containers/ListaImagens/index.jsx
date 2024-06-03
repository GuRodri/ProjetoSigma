// src/components/Listagem.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig'; // Importe o db do arquivo firebaseConfig
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
        const anunciosSnapshot = await getDocs(collection(db, "Anuncio"));
        const jogosSnapshot = await getDocs(collection(db, "Jogo"));

        const produtos = produtosSnapshot.docs.map(doc => ({ tipo: 'Produto', ...doc.data() }));
        const anuncios = anunciosSnapshot.docs.map(doc => ({ tipo: 'Anúncio', ...doc.data() }));
        const jogos = jogosSnapshot.docs.map(doc => ({ tipo: 'Jogo', ...doc.data() }));

        const imagens = [...produtos, ...anuncios, ...jogos];
        setImagens(imagens);
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
            {imagem.imagens && imagem.imagens.map((image, idx) => (
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
