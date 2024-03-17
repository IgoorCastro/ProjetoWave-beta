import React from 'react';
import * as C from './styles';
import TrackCard from '../TrackCard';
import imgCarouselTest from '../../assets/imgTest2.jpg';
import imgCarouselTest2 from '../../assets/imgTest1.jpg';
import imgCarouselTest3 from '../../assets/imgTest3.jpg';

const card = [
    {
        autor: 'Biel Macielo',
        participacao: 'Tiugo e Mari Mari',
        titulo: 'Coração Maldoso Preto Escuro',
        descricao: 'A saudação a sua tia',
        tags: '#rap, #boombap, #hiphop, #gospel, #deIgreja',
        imgUrl: imgCarouselTest
    },
    {
        autor: 'Karlin157',
        participacao: 'Mari Mari',
        titulo: 'Usuarios também é gente',
        descricao: 'A revolta dos que ja se foram',
        tags: '#pop, #boombap, #gospel, #deIgreja',
        imgUrl: imgCarouselTest2
    },
    {
        autor: 'Biel Macielo',
        participacao: 'Tiugo e Mari Mari',
        titulo: 'Coração Maldoso Preto Escuro',
        descricao: 'A saudação a sua tia',
        tags: '#rap, #boombap, #hiphop, #gospel, #deIgreja',
        imgUrl: imgCarouselTest3
    },
    {
        autor: 'Karlin157',
        participacao: 'Mari Mari',
        titulo: 'Usuarios também é gente',
        descricao: 'A revolta dos que ja se foram',
        tags: '#pop, #boombap, #gospel, #deIgreja',
        imgUrl: imgCarouselTest2
    },
    {
        autor: 'Biel Macielo',
        participacao: 'Tiugo e Mari Mari',
        titulo: 'Coração Maldoso Preto Escuro',
        descricao: 'A saudação a sua tia',
        tags: '#rap, #boombap, #hiphop, #gospel, #deIgreja',
        imgUrl: imgCarouselTest
    },
    {
        autor: 'Karlin157',
        participacao: 'Mari Mari',
        titulo: 'Usuarios também é gente',
        descricao: 'A revolta dos que ja se foram',
        tags: '#pop, #boombap, #gospel, #deIgreja',
        imgUrl: imgCarouselTest3
    }
]

const CarouselFaixas = () => {
    return (
        <C.CarouselContainer>
            {(card.map((item, index) => (
                <TrackCard key={index} imgSrc={item.imgUrl} title={item.titulo} />
            )))}
        </C.CarouselContainer >
    )
}

export default CarouselFaixas
