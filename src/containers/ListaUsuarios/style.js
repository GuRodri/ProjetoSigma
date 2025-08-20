export const TableAction = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;

    svg {
        cursor: pointer;
        transition: transform 0.18s, box-shadow 0.18s;
        border-radius: 50%;
        padding: 2px;
        background: transparent;
        box-shadow: 0 0 0 rgba(0,0,0,0);
    }

    svg:hover {
        transform: scale(1.18);
        box-shadow: 0 2px 8px rgba(59,164,209,0.18);
        background: #232526;
    }
`;
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2.5em;
    padding-bottom: 0.5em;
    border-bottom: 1.5px solid #3BA4D1;
`;

export const Title = styled.h2`
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
    margin: 0;
`;

export const AddButton = styled(NavLink)`
    background: linear-gradient(90deg, #3BA4D1 0%, #25D62C 100%);
    color: #fff;
    font-weight: 600;
    font-size: 1.08rem;
    padding: 0.7em 1.6em;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(59,164,209,0.15);
    text-decoration: none;
    transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        background: linear-gradient(90deg, #25D62C 0%, #3BA4D1 100%);
        box-shadow: 0 4px 16px rgba(59,164,209,0.25);
        transform: translateY(-2px) scale(1.04);
    }
`;

export const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 1.5em;
    margin-bottom: 2em;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background: #f5f7fa;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(59,164,209,0.10);
    overflow: hidden;

    th, td {
        padding: 0.55em 1em;
        text-align: left;
        font-size: 1.08rem;
        color: #23243a;
        border-bottom: 1px solid #e0e3ea;
        vertical-align: middle;
        transition: background 0.2s;
        line-height: 1.2;
    }

    th {
        background: linear-gradient(90deg, #e0e3ea 0%, #c2e9fb 100%);
        color: #23243a;
        font-weight: 700;
        letter-spacing: 0.5px;
        border-bottom: 2px solid #7fd8f7;
    }

    tbody tr:nth-child(even) {
        background: #e0e3ea;
    }
    tbody tr:nth-child(odd) {
        background: #f5f7fa;
    }

    tr:last-child td {
        border-bottom: none;
    }

    @media (max-width: 768px) {
        th, td {
            font-size: 0.98rem;
            padding: 0.35em 0.5em;
        }
    }
`;

export const FeedbackMessage = styled.div`
    width: 100%;
    text-align: center;
    color: #ff4d4f;
    background: rgba(255,77,79,0.08);
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 2em 0;
    padding: 1.2em 0;
    box-shadow: 0 2px 8px rgba(255,77,79,0.10);
`;
import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 1em;
    min-height: 77.8vh;
    color: #d9d9d9;
    padding: 3em;
    p{
        margin-bottom: 1em;
    }
`;

export const ContainerCarrinho = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin-bottom: 2em;
    gap: 1em;

    .adicionar{
        position: relative;
  display: inline-block;
  color: #d9d9d9;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px; /* Ajuste conforme necessário */
    left: 0;
    width: 100%;
    height: .5px; /* Altura mínima para uma linha quase invisível */
    background: rgba(255, 255, 0, 0.3); /* Amarelo quase invisível */
    box-shadow: 0 0 5px rgba(255, 255, 0, 0.8), 0 0 10px rgba(255, 255, 0, 0.2), 0 0 20px rgba(255, 255, 0, 0.1);
  
  }
    }
`;
export const ContainerCarrinho2 = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    border: 1px solid #726F6F;
    background-color: #252c37;
    border-radius: 10px;
`;

export const ContainerMenor = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 1em;
    margin: 1em;
    align-self:flex-end;
`;  
export const ContainerBotao= styled.div `
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    align-items: center;
    margin-top: 1em;
    align-self:flex-end;
`;