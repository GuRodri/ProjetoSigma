import React, { useState } from "react";
import { Container, Coluna, ContainerEspacamento, Campo, Dropdown, DropdownItem } from "./style";
import { NavLink } from "react-router-dom";
import BContinuar from "../../../components/Button/Continuar";

const SetupGamerPage5 = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        teclado: "",
        mouse: "",
        headfone: "",
        tela: ""
    });

    const handleMenuToggle = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const handleOptionSelect = (category, option) => {
        setSelectedOptions({ ...selectedOptions, [category]: option });
        setOpenMenu(null);
    };

    return (
        <Container>
            <h2>Como prefere seus equipamentos?</h2>
            <ContainerEspacamento>
                <Coluna>
                    <h3>Teclado</h3>
                    <Campo onClick={() => handleMenuToggle("teclado")}>
                        <label>{selectedOptions.teclado || "Selecione uma opção"}</label>
                    </Campo>
                    {openMenu === "teclado" && (
                        <Dropdown>
                            <DropdownItem onClick={() => handleOptionSelect("teclado", "Padrão")}>Padrão</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect("teclado", "Intermediário")}>Intermediário</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect("teclado", "Alta Qualidade")}>Alta Qualidade</DropdownItem>
                        </Dropdown>
                    )}
                </Coluna>

                <Coluna>
                    <h3>Mouse</h3>
                    <Campo onClick={() => handleMenuToggle("mouse")}>
                        <label>{selectedOptions.mouse || "Selecione uma opção"}</label>
                    </Campo>
                    {openMenu === "mouse" && (
                        <Dropdown>
                            <DropdownItem onClick={() => handleOptionSelect("mouse", "Padrão")}>Padrão</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect("mouse", "Intermediário")}>Intermediário</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect("mouse", "Alta Qualidade")}>Alta Qualidade</DropdownItem>
                        </Dropdown>
                    )}
                </Coluna>

                <Coluna>
                    <h3>Headfone</h3>
                    <Campo onClick={() => handleMenuToggle("headfone")}>
                        <label>{selectedOptions.headfone || "Selecione uma opção"}</label>
                    </Campo>
                    {openMenu === "headfone" && (
                        <Dropdown>
                            <DropdownItem onClick={() => handleOptionSelect("headfone", "Padrão")}>Padrão</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect("headfone", "Intermediário")}>Intermediário</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect("headfone", "Alta Qualidade")}>Alta Qualidade</DropdownItem>
                        </Dropdown>
                    )}
                </Coluna>

                <Coluna>
                    <h3>Tela</h3>
                    <Campo onClick={() => handleMenuToggle("tela")}>
                        <label>{selectedOptions.tela || "Selecione uma opção"}</label>
                    </Campo>
                    {openMenu === "tela" && (
                        <Dropdown>
                            <DropdownItem onClick={() => handleOptionSelect("tela", "Padrão")}>Padrão</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect("tela", "Intermediário")}>Intermediário</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect("tela", "Alta Qualidade")}>Alta Qualidade</DropdownItem>
                        </Dropdown>
                    )}
                </Coluna>

                <NavLink to={'/setupGamer-page6'}>
                    <BContinuar />
                </NavLink>
            </ContainerEspacamento>
        </Container>
    );
}

export default SetupGamerPage5;
