import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 77.8vh;
    background-color: transparent;
    text-align: center;
    color:#d9d9d9;
    text-decoration: none;
    padding: 3em;
    h3{
        font-size: 40px;
        margin-bottom: 15px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    background-color: #101419;
    border-radius: 20px;
    border: 1px solid #726F6F;
    padding: 40px;

    label{
        font-size: 14px;
        padding-left:2px;
    
    }

`;

export const Input = styled.input`
    margin-bottom: 8px;
    margin: 5px 0 30px 0;
    border: 1px solid #ccc;
    border-radius: 1.25em;
    width: 350px;
    height: 35px;
    text-align: left;
    padding: 0 15px;
`;


export const Campos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 16px;
`;

export const Texto = styled.div`
    text-align: left; 
    width: 100%; 
    padding-bottom: 40px; 
    text-decoration: none;
   p{
         font-size: 12px;
         margin-bottom: 4px;
         color: #d9d9d9;
   }
   span{
        font-size: 12px;
        color: #3BA4D1;
   }
`;
