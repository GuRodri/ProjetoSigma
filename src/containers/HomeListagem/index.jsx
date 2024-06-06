import React, { useContext } from 'react';
import CardVertical from "../../components/Cards/CardVertical";
import { ContainerHome, ContainerListagem } from "./style";
import { SearchContext } from "../../context/searchContext";

function HomeListagem() {
    const { globalSearchTerm } = useContext(SearchContext);

    return (
        <ContainerHome>
            <ContainerListagem>
                <CardVertical searchTerm={globalSearchTerm} /> 
            </ContainerListagem>    
        </ContainerHome>
    );
}

export default HomeListagem;
