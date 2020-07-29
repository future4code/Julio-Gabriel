import React from 'react'
import styled from 'styled-components'
import CreateTask from './components/CreateTask/CreateTask'

const Container = styled.div
`
width: 100%;
display: flex;
justify-content: center;
`

function App() {
  return (
    <Container>
      <CreateTask />
    </Container>
  );
}

export default App;