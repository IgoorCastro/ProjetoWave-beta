import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const MainContainer = styled.div`
    height: 60%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;

    //border: 1px solid red;
`;

export const MainContent = styled.div`
    height: 90%;
    width: 95%;

    display: flex;
    flex-direction: row;
    align-items: start;

    // border: 1px solid red;
`;

export const UserDataContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 160px;

    z-index: 999;

    display: flex;
    flex-direction: row;
    
    // border: 1px solid red;
`;

export const UserSocialContent = styled.div`
    width: 40%;
    height: 160px;
    min-height: 160px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    // border: 1px solid purple;
`;

export const UserAboutContent = styled.div`
    width: 60%;
    height: 160px;
    min-height: 160px;

    border: 1px solid green;
`;

export const CarouselContainer = styled.div`
    height: 40%;
    width: 100%;

    display: flex;
    justify-content: center;

    // border: 1px solid red;
`;

export const UserName = styled.label`
    font-size: 1.5rem;
    font-weight: 700;

    margin-left: 30px;
`;

export const SocialContainer = styled.div`
    margin-top: 25px;
    margin-left: 30px;

    width: min-content;

    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Define três colunas com a largura igual */
    gap: 5px;
    
    // border: 1px solid red;
`;

export const SocialMidia = styled.img`
    width: 50px;
    height: 50px;

    cursor: pointer;

    // border: 1px solid red;
`;