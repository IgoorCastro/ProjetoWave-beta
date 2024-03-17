import styled from "styled-components";

export const Container = styled.div`    
    // height: 100%;
    // width: 13%;

    flex-basis: 140.625px; // Define o tamanho inicial de um item flexível antes que o espaço extra ou faltante seja distribuído.
    flex-shrink: 0; // Determina quanto um item flexível pode encolher em relação aos outros itens
    flex-grow: 0; // Determina quanto um item flexível pode crescer em relação aos outros itens
    min-width: 0;
    
    z-index: 999;

    display: flex;
    flex-direction: column;

    gap: .3rem;

    border-radius: 2.5rem;

    // border: 1px solid green;
`;

export const CardContent = styled.div`
    width: 100%;
    height: 92%;

    position: relative;

    display: flex;
    justify-content: center; 
    align-items: center; 

    cursor: pointer;

    border-radius: 2.5rem;

    border: 2px solid #fff;
`;

export const CardBackImg = styled.img`
    width: 100%;
    height: 100%;

    border-radius: 2.5rem;

    border: 1px solid red;

    filter: blur(3px);
`;

export const CardImgContent = styled.div`
    position: absolute; /* Define uma posição absoluta */
    top: 50%; /* Coloca o elemento no meio verticalmente */
    left: 50%; /* Coloca o elemento no meio horizontalmente */
    transform: translate(-50%, -50%); /* Move o elemento de volta para ajustar ao centro */
    
    width: 110px;
    height: 110px;
    
    display: flex;
`;

export const CardImg = styled.img`    
    width: 100%;
    height: 100%;

    border-radius: 2.5rem;

    box-shadow: 6px 10px 3px -3px rgba(0,0,0,0.5);
`;

export const CardTitle = styled.h3`
    white-space: nowrap; /* Impede que o texto seja quebrado em várias linhas */
    overflow: hidden; /* Oculta qualquer texto que ultrapasse o limite do contêiner */
    text-overflow: ellipsis; /* Adiciona reticências quando o texto não couber no contêiner */

    font-size: .8rem
`;