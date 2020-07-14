import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div
`
display: flex;
align-items: center;
margin: 1vh;
`

const ImagemDoPerfil = styled.img
`
width: 4vw;
height: 4vw;
border-radius: 100%;
`

const EspacamentoDoNome = styled.p
`
margin-left: 1vw;
`

function Matches() {

    const [matches, setMatches] = useState([])

    const aluno = "julio-gabriel-turing"

    useEffect(()=> {
        exibeMatches(aluno)
    }, [matches])

    const exibeMatches = (aluno) => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`,)
        .then((response) => {
            setMatches(response.data.matches)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div>
            {matches.map((match) => {
                return (
                        <Container key={match.id}> <ImagemDoPerfil src={match.photo}></ImagemDoPerfil> <EspacamentoDoNome>{match.name}</EspacamentoDoNome> </Container>
                )
            })}
        </div>
    )
}

export default Matches