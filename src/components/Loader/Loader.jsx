import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './animation.css';
import { ReactComponent as Logo } from './loader.svg';
import { ReactComponent as Pin } from './pin.svg';
import { ReactComponent as Spot } from './spot.svg';

function Loader() {
    const dropAnimation = keyframes`
        0% {transform: translateX(20px) translateY(-200px) scaleY(0.9); opacity: 0;}
        5% {transform: translateX(20px) translateY(-200px) scaleY(0.9); opacity: 0;}
        10% {opacity: .7;}
        100% {transform: translateX(20px) translateY(-80px) scaleY(1); opacity: 1;}
    `;

    const fadeAnimation = keyframes`
        0% {opacity: 0;}
        100% {opacity: 1;}
    `;

    const zoomAnimation = keyframes`
        0% {transform: scale(1);}
        100% {transform: scale(0.01); opacity: 0;}
    `;

    const Background = styled.div`
        background-color: #1a1a1a;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
    `;

    const Container = styled.div`
        width: 100%;
        height: 100%;   
        position: relative;
        transition: scale .3s ease-out;
        animation-name: ${zoomAnimation};
        animation-duration: 0.3s;
        animation-delay: 6.6s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
    `;

    const LogoContainer = styled.div`
        width: 30%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 200px;
        max-width: 600px;

        #loader {
            width: 100%;
        }

        #pin {
            opacity: 0;
            position: absolute;
            height: 50px;
            fill: white;
            transform: translate(20px, -80px);
            animation-name: ${dropAnimation};
            animation-duration: 0.2s;
            animation-delay: 4s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
        }

        #spot {
            opacity: 0;
            position: absolute;
            height: 50px;
            fill: white;
            transform: translate(0px, -80px);
            animation-name: ${fadeAnimation};
            animation-duration: 0.4s;
            animation-delay: 4.2s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
        }
    `;

    const [loading, setLoading] = useState(true);
    const [dropped, setDropped] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 7000);
    }, []);

    return (
        <>
            {loading ? (
                <Background>
                    <Container>
                        <LogoContainer>
                            <Logo />
                            <Pin />
                            <Spot />
                        </LogoContainer>
                    </Container>
                </Background>
            ) : null}
        </>
    );
}

export default Loader;
