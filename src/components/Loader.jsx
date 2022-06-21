import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loader(props) {
    const loadingAnimation = keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    `;

    const LoaderContainer = styled.div`
        background-color: black;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;

        &.invisible {
            z-index: -1;
        }
    `;

    const Loader = styled.div`
        position: absolute;
        top: calc(50% - 4em);
        left: calc(50% - 4em);
        width: 6em;
        height: 6em;
        border: 1.1em solid rgba(255, 255, 255, 0.497);
        border-left: 1.1em solid #ffffff;
        border-radius: 50%;
        animation: ${loadingAnimation} 1.1s infinite linear;
        transition: opacity 0.3s;
    `;

    return (
        <LoaderContainer className={props.loading ? '' : 'invisible'}>
            <Loader />
        </LoaderContainer>
    );
}

export default Loader;
