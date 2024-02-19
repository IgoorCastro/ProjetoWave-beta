import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const AnimateContainer = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    // border: 1px solid green;
`;

export const AnimateContent = styled.div`
    position: relative;

    height: 25%;
    width: 100%;

    display: flex;
    align-items: center;
    
    //border: 1px solid red;
`;

// Configurações da animação com keyframes
const slide = keyframes`
    0% {transform: translateX(-100%);}
    20% {height: 180px; width: 180px}
    25% {height: 210px; width: 190px}
    29% {height: 180px; width: 180px}
    30% {transform: translateX(302.3%); filter: blur(0);} / * Mantendo no centro verticalmente */     
    100% {transform: translateX(302.3%) rotate(720deg); filter: blur(10px);} / * Girando o component e adicionando um blur */
`;

export const AnimateBackground = styled.div`
    height: 180px;
    width: 180px;
    position: relative;
    animation: ${slide} 9s forwards;
    
    //border: 1px solid blue;
`;

export const AnimateImg = styled.img`
    width: 100%;
    height: 100%;
`;