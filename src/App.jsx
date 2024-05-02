import './App.css'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Content from './Content';
import Confettii from './Confettii';



function App() {
  const [confetti, setConfetti] = useState(false)

  function handleClick() {
    setConfetti(true)
  }

  return (
    <>
      {/* Main */}
      <Container fluid="md">
        <h1 className='pacifico-regular'>Project Nat</h1>
        {confetti ? <Confettii /> : <Content handleClick={handleClick} />
        }
      </Container >
    </>
  )
}

export default App
