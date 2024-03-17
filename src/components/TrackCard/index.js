import React from 'react';
import * as C from './styles';

const TrackCard = ({ title = "Card Title", key, imgBackground, imgSrc }) => {
    const testCard = () => alert("Se fudeu, otário!");

    return (
        <C.Container key={key} onClick={testCard}>
            <C.CardContent>
                <C.CardBackImg src={imgSrc} />
                <C.CardImgContent>
                    <C.CardImg src={imgSrc} />
                </C.CardImgContent>
            </C.CardContent>
            <C.CardTitle>{title}</C.CardTitle>
        </C.Container>
    )
}

export default TrackCard
