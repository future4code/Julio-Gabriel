import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

const Container = styled.div
`
display: flex;
align-items: center;
margin: 1vh;
`

const ContainerCarregamento = styled.div
`
width: 30vw;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
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

function Matches(props) {

    const [matches, setMatches] = useState([])
    const [carregar, setCarregar] = useState(false)

    useEffect(()=> {
        exibeMatches()
    }, [props.atualizaEstado])

    const exibeMatches = () => {
            axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julio-gabriel-turing/matches`,)
            .then((response) => {
                setMatches(response.data.matches)
                setCarregar(true)
            })
            .catch((error) => {
                console.log(error.message)
            })     
    }

    const renderizaNaTela = () => {
        if (matches.length === 0 && !carregar) {
            return (
                <ContainerCarregamento>
                    <CircularProgress />
                </ContainerCarregamento>
            )
        } else if (matches.length >= 1 && carregar) {
            return (
                <div>
                    {matches.map((match) => {
                        return (
                            <Container key={match.id}> <ImagemDoPerfil src={match.photo}></ImagemDoPerfil> <EspacamentoDoNome>{match.name}</EspacamentoDoNome> </Container>
                        )
                    })}
                </div>
            )
        } else if (matches.length === 0 && carregar) {
            return (
                <ContainerCarregamento>
                    <p>Nenhum match</p>
                </ContainerCarregamento>
            )
        }
    }

    return (
        <div>
            {renderizaNaTela()}
        </div>
    )
}

export default Matches