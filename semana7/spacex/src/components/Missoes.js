import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerMissao = styled.span
`
width: 30%;
height: 20%;
border: 1px solid black;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 10px;
`

const NomeMissao = styled.p
`
font-weight: bold;
margin-left: 1vw;
`

const BotaoDetalhe = styled.button
`
width: 8vw;
border-style: ridge;
font-weight: bold;
font-size: 16px;
background-color: transparent;
margin-right: 1vw;
`

class Missoes extends React.Component {

    state = {
        listOfMission: [],
        chave: ""
    }

    componentDidMount = () => {
        axios.get("https://api.spacexdata.com/v3/missions").then((response) => {
          this.setState({listOfMission: response.data})
        }).catch((error) => {
          console.log(error.message)
        })
    }

    clickId = (identificador) => {
        this.setState({chave: identificador})
    } 

    render () {

        return(

            this.state.listOfMission.map(mission => {
                return (                   
                <ContainerMissao key={mission.mission_id}>
                    <NomeMissao>{mission.mission_name}</NomeMissao>
                    <BotaoDetalhe onClick={() => this.props.maisDetalhes(mission.mission_id)}>Saiba mais</BotaoDetalhe>
                </ContainerMissao>
                )
            })
            

        )

    }
}

export default Missoes