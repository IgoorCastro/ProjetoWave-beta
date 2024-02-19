import React from 'react';
import * as C from './styles'
import logo from '../../assets/logoWave01.png';

const Home = () => {
    return (
        <C.Container>
            <C.AnimateContainer>
                <C.AnimateContent>
                    <C.AnimateBackground>
                        <C.AnimateImg src={logo} />
                    </C.AnimateBackground>
                </C.AnimateContent>
            </C.AnimateContainer>
        </C.Container>
    )
}

export default Home;
