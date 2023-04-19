import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: #81a683;
    width: 140px;
    height: 140px;
    border-radius: 10px;

    font-size: 1.2rem;
    font-style: none;
    color: #000;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const Icon = styled.img`
    width: 70px;
`