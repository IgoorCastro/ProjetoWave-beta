import React from 'react';
import * as C from './styles';
import AnimatedBackground from '../AnimeteBackground';

const Login = () => {
    return (
        <C.Container>
            <AnimatedBackground />
            <C.loginContent>
                Login Content
            </C.loginContent>
        </C.Container>
    )
}

export default Login
