import React from 'react';
import { Container, Title, Paragraph, Paragraph1, StrongText, Image, ContainerEstilo, IconWrapper } from './style';
import gamerImage from '../../assets/icons/logo.svg';
import { FaShoppingCart, FaHandshake, FaUsers, FaEye } from 'react-icons/fa';

const SobreNos = () => {
  return (
    <Container>
      <Title>
        <Image src={gamerImage} alt="Gamer" style={{ width: '5em', height: '5em' }} />
        Sobre a Sigma Hardware
      </Title>
      <Paragraph1>
        Seja bem-vindo à Sigma Hardware, onde a paixão pelo gaming se encontra com a excelência em tecnologia.
      </Paragraph1>
      <ContainerEstilo>
        <Paragraph>
          <IconWrapper>
            <FaShoppingCart style={{ width: '5em', height: '5em', color: 'yellow' }} />
          </IconWrapper>
          <StrongText>Nossa Loja:</StrongText> A Sigma Hardware é uma loja especializada em produtos tecnológicos voltados para o público gamer. Nosso objetivo é oferecer aos nossos clientes uma experiência única de compra, proporcionando produtos de alta qualidade e soluções customizadas que atendam às necessidades específicas dos gamers.
        </Paragraph>
        <Paragraph>
          <IconWrapper>
            <FaHandshake style={{ width: '5em', height: '5em', color: '#25D62C' }} />
          </IconWrapper>
          <StrongText>Fundação:</StrongText> Fundada com a missão de inovar no setor de e-commerce de produtos tecnológicos, a Sigma Hardware busca constantemente superar expectativas e oferecer um serviço diferenciado. Estamos comprometidos em não apenas vender produtos, mas também em construir relacionamentos sólidos com nossos clientes, garantindo sua satisfação e fidelidade.
        </Paragraph>
        <Paragraph>
          <IconWrapper>
            <FaUsers style={{ width: '5em', height: '5em', color: '#4556F2' }} />
          </IconWrapper>
          <StrongText>Equipe:</StrongText> Com uma equipe dedicada e qualificada, estamos preparados para acompanhar o crescimento do mercado gamer e nos destacar entre os concorrentes, sempre focados em melhorias contínuas no design, usabilidade do site e na oferta de novas soluções tecnológicas.
        </Paragraph>
        <Paragraph>
          <IconWrapper>
            <FaEye style={{ width: '5em', height: '5em', color: '#d9d9d9' }} />
          </IconWrapper>
          <StrongText>Nossa Visão:</StrongText> Ser reconhecida como a principal referência em e-commerce de produtos tecnológicos para gamers, oferecendo inovação, qualidade e atendimento excepcional.
        </Paragraph>
      </ContainerEstilo>
    </Container>
  );
};

export default SobreNos;
