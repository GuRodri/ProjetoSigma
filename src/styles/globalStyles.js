import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #1c1c1c;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;

}

p{
    font-size: .875em;
}
`

export { GlobalStyles };
