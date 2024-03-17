import styled from "styled-components";

export const CarouselContainer = styled.div`
    width: 95%;
    height: 98%;
    min-height: 250px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .9rem;

    border-radius: .5rem;

    z-index: 999;

    overflow-x: auto; /* Adiciona barra de rolagem horizontal */
    overflow-y: hidden; /* Esconde a barra de rolagem vertical */
    
    /* Estilização da barra de rolagem */
    /* Chrome, Edge e Safari */
    &::-webkit-scrollbar {
        height: 8px; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #a873f1;
        border-radius: 10px;
        border: 0px solid #fff;
    }   

    // border: 1px solid blue;
`;



