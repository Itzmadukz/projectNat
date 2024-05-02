import { Col, Container, Row } from 'react-bootstrap'
import Confetti from 'react-confetti'

export default function Confettii() {
  return (
    <Container fluid>
      <Confetti
      />
      <Row className='textBox'>
        <Col >
          <h1 className='pacifico-regular'>
          🎉 🕺🏾 👩🏾‍❤️‍💋‍👨🏾 </h1>
          
        </Col>
      </Row>
    </Container>
  )
}