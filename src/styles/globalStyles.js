import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #1c1c1c;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    position: relative;
}

body::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('src/assets/img/fundo/fundob4.webp');
   opacity: 0.25; /* Controla a opacidade da imagem */
  transition: opacity 0.3s ease; /* Suaviza a transição quando a opacidade mudar */
  z-index: -1;
}

p{
    font-size: .875em;
}
`

export { GlobalStyles };
