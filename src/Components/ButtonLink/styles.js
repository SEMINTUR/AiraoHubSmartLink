import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 220px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    transition: ease-in-out 0.5s;
    &:hover{
        cursor: pointer;
        box-shadow: 2px 2px  #81a683;
    }
`

export const Text = styled.p`
    font-size: 1.2rem;
    margin-left: 10px;
`

export const Icon = styled.img`
    width: 50px;
`

export const ShowLink = styled.a`

`

export const QRButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    border: none;
    &:hover{
        cursor: pointer;
    }
`