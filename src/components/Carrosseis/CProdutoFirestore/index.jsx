/*import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa o estilo do carrossel

const CProdutoFirestore = ({ produtoId }) => {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchImagens = async () => {
      try {
        const produtoRef = doc(db, 'Produto', produtoId); // Ajusta para a coleção 'Produto'
        const produtoSnap = await getDoc(produtoRef);

        if (produtoSnap.exists()) {
          const produtoData = produtoSnap.data();
          const { imagensProduto } = produtoData; // Extrai o array de imagens

          // Obtém as URLs das imagens
          const urls = imagensProduto.map(img => img.url);

          setImagens(urls);
        } else {
          console.error('Produto não encontrado no Firestore');
        }
      } catch (err) {
        console.error('Erro ao buscar imagens do Firestore:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImagens();
  }, [produtoId, db]);

  if (loading) {
    return <div>Carregando imagens...</div>;
  }

  if (error) {
    return <div>Erro ao carregar imagens: {error}</div>;
  }

  return (
    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
      {imagens.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Imagem ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CProdutoFirestore;*/

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig'; // Assumindo que a configuração do Firestore está nesse arquivo
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importação necessária para o funcionamento do carrossel
import { CarouselContainer } from './style'; // Importando o estilo separado

const CProdutoFirestore = ({ produtoId }) => {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImagens = async () => {
      try {
        // Cria uma query para buscar os documentos da coleção 'Produto' com o idProduto específico
        const q = query(collection(db, 'Produto'), where('idProduto', '==', produtoId));
        const querySnapshot = await getDocs(q);

        // Se os documentos forem encontrados, extrai as URLs de imagens
        if (!querySnapshot.empty) {
          const imagensUrls = [];
          querySnapshot.forEach((doc) => {
            const produtoData = doc.data();
            // Verifica se o campo 'imagensProduto' existe e é um array
            if (produtoData.imagensProduto && Array.isArray(produtoData.imagensProduto)) {
              const urls = produtoData.imagensProduto.map(img => img.url);
              imagensUrls.push(...urls); // Adiciona todas as URLs encontradas
            }
          });
          setImagens(imagensUrls);
        } else {
          console.error('Produto com o idProduto não encontrado.');
        }
      } catch (err) {
        console.error('Erro ao buscar imagens do Firestore:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImagens();
  }, [produtoId]);

  if (loading) {
    return (
      <CarouselContainer>
        <div>Carregando imagens...</div>
      </CarouselContainer>
    );
  }

  if (error) {
    return (
      <CarouselContainer>
        <div>Erro ao carregar imagens</div>
      </CarouselContainer>
    );
  }

  if (imagens.length === 0) {
    return (
      <CarouselContainer>
        <div>Nenhuma imagem disponível</div>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer>
      <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
        {imagens.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CProdutoFirestore;
