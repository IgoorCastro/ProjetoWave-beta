import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const HeaderContainer = styled.div`
    height: 7%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: #1E1E1E;

    // border: 1px solid black;
`;

export const HeaderContent = styled.div`
    height: 100%;
    width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    color: #fff;

    // border: 1px solid white;
`;


export const HeaderLogo = styled.img`
    height: 65%;
    width: auto;
    
    cursor: pointer;
`;

export const MainContainer = styled.div`
    height: 43%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    // border: 1px solid red;
`;

export const MainContent = styled.div`
    height: 100%;
    width: 80%;

    display: flex;
    flex-direction: row;
    align-items: center;

    // border: 1px solid red;
`;

export const UserDataContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 160px;

    z-index: 999;

    display: flex;
    flex-direction: row;
    align-items: center;
    
    //border: 1px solid red;
`;

export const UserSocialContent = styled.div`
    width: 50%;
    height: 22px;
    min-height: 220px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // border: 1px solid purple;
`;

export const UserAboutContent = styled.div`
    width: 60%;
    height: 220px;
    min-height: 220px;

    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;

    // border: 1px solid green;
`;

export const CarouselContainer = styled.div`
    height: 50%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    // border: 1px solid purple;
`;

export const UserName = styled.label`
    font-family: TheBoldFont, sans-serif;
    font-size: 2.5rem;
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

export const UserAboutSection = styled.div`
    height: min-content;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: end;

    // border: 1px solid green;
`;

export const Label = styled.label`
    text-align: right;
    font-size: .95rem;
`;