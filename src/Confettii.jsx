import { Col, Container, Row } from 'react-bootstrap'
import Confetti from 'react-confetti'

export default function Confettii() {
  return (
    <Container fluid>
      <Confetti
      />
      <Row className='textBox'>
        <Col className='pacifico-regular' >
            <h1>
              🎉 🕺🏾 👩🏾‍❤️‍💋‍👨🏾 <br/> 
              A package is coming for you soon 
            </h1>
        </Col>
      </Row>
    </Container>
  )
}
