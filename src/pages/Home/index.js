import React from 'react';
import * as C from './styles';
import AnimateBackground from '../../components/AnimeteBackground';
import CarouselFaixas from '../../components/CarouselTracks';
import Spectograma from '../../components/Spectograma';

const Home = () => {
    return (
        <C.Container>

            <AnimateBackground blur={false} />
            <C.MainContainer>

            </C.MainContainer>
            <C.CarouselContainer>
                <CarouselFaixas />
            </C.CarouselContainer>
            {/* <Spectograma /> */}
        </C.Container>
    )
}

export default Home;
