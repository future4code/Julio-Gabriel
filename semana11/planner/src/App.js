import React from 'react'
import styled from 'styled-components'
import CreateTask from './components/CreateTask/CreateTask'
import HeaderFooter from './components/HeaderFooter/HeaderFooter'

const Container = styled.div
`
width: 100%;
display: flex;
flex-direction: column;
`

function App() {
  return (
    <Container>
      <HeaderFooter />
      <CreateTask />
      <HeaderFooter />
    </Container>
  );
}

export default App;