import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerDetalhe = styled.div
`
display: flex;
flex-direction: column;
width: 60vw;
`

const LinksDoSite = styled.a
`
margin-left: 1vw;
text-decoration: none;
color: blue;
`

const TituloDaMissao = styled.p
`
font-weight: normal;
font-size: 24px;
`

const BotaoVoltar = styled.button
`
width: 5vw;
margin-top: 3vh;
border-style: none;
background-color: transparent;
color: red;
font-size: 16px;
font-weight: bold;
`

const LinksUteis = styled.div
`
display: flex;
flex-direction: row;
justify-content: start;
font-weight: bold;
font-size: 16px;
align-items: center;
`

class Detalhes extends React.Component {

    state = {
        infoMission: {}
    }

    componentDidMount = () => {
        axios.get(`https://api.spacexdata.com/v3/missions/${this.props.idDaMissao}`).then((response) => {
            this.setState({infoMission: response.data})
        }).catch((error) => {
            console.log(error.message)
        }) 
    } 

    render() {

        return (
                    <ContainerDetalhe>
                        <h1>{this.state.infoMission.mission_name}</h1>
                        <TituloDaMissao>{this.state.infoMission.description}</TituloDaMissao>
                        <LinksUteis>
                            <p>Links Úteis:</p>
                            <LinksDoSite href={this.state.infoMission.twitter}>Twitter</LinksDoSite>
                            <LinksDoSite href={this.state.infoMission.website}>Website</LinksDoSite>
                            <LinksDoSite href={this.state.infoMission.wikipedia}>Wikipedia</LinksDoSite>
                        </LinksUteis>
                        <BotaoVoltar onClick={this.props.maisDetalhes}>VOLTAR</BotaoVoltar>
                    </ContainerDetalhe> 
        )

    }
}

export default Detalhes