import React from 'react'
import styled from 'styled-components'

const ContainerFooter = styled.div
`
width: 100vw;
height: 15vh;
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
`

const Logo = styled.h2
`
color: white;
margin-left: 5vw;
`

function Footer() {
    return (
        <ContainerFooter>
            <Logo>LabeX</Logo>
        </ContainerFooter>
    )
}

export default Footer