import React from 'react'
import styled from 'styled-components'
import Router from './components/Router'

const ContainerGeral = styled.div
`
width: 100vw;
min-height: 100vh;
`


function App () {
  return (
    <ContainerGeral>
      <Router />
    </ContainerGeral>
  )
}

export default App 