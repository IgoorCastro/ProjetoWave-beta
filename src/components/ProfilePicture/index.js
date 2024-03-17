import React from 'react';
import * as C from './styles';

const ProfilePicture = ({ props }) => {
    return (
        <C.Container>
            <C.ProfileImg src={props} />
        </C.Container>
    )
}

export default ProfilePicture
