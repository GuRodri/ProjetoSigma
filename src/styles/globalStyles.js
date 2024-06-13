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
    position: relative; /* Importante para o posicionamento do pseudo-elemento */
}

body::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('src/assets/img/fundo/fundo6.svg');
    opacity: 0.5; /* Define a opacidade desejada (0.5 representa 50% de opacidade) */
    z-index: -1; /* Coloca o pseudo-elemento atrás de todos os outros elementos */
}

p{
    font-size: .875em;
}
`

export { GlobalStyles };
