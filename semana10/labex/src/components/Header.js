import React from 'react'
import styled from 'styled-components'
import LoginPage from '../components/LoginPage'

const ContainerCabecalho = styled.div
`
width: 100%;
height: 15vh;
background-color: black;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const Logo = styled.h2
`
margin-left: 5vw;
color: white;
`

function Header() {

    return (
        <ContainerCabecalho>
            <Logo>LabeX</Logo>
            <LoginPage />
        </ContainerCabecalho>
    )
}

export default Header