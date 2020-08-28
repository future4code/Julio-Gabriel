import React from 'react'
import styled from 'styled-components'

const ContainerFooter = styled.div
`
width: 100%;
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

function HeaderFooter() {
    return (
        <ContainerFooter>
            <Logo>SeuPlanner.com</Logo>
        </ContainerFooter>
    )
}

export default HeaderFooter