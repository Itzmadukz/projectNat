import { useState } from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function Content({ handleClick }) {
    const [clickedNo, setClickedNo] = useState(false)

    function handleNo() {
        setClickedNo(() => !clickedNo)
        setClickedNo(true)
    }

    return (
        <>
            <div className="wrapper">
                <Row className='textBox'>
                    <Col><p className='pacifico-regular'> "Finding someone who makes you feel happy
                        is not as important as someone who actively created happiness around you,
                        whose own happiness stimulates yours."</p></Col>
                </Row>
            </div>
            {/* <p style={{ textAlign: 'center' }}>
          <Image src="./src/assets/collage.png" rounded fluid />
        </p> */}

            <Row className='textBox'>
                <Col >
                    <p className='pacifico-regular'>
                        As soon as I saw you, I knew an adventure was about to happen.</p>
                    <Image className="imageBox" src="./src/assets/collage_2.png" rounded fluid />
                </Col>
            </Row>


            <div className="wrapper">
                <Row className='textBox'>
                    <Col ><p className='pacifico-regular'>I know i'm not perfect,
                        but being around you makes me want to be best version of myself
                    </p></Col>
                </Row>
            </div>

            <Row className='textBox'>
                <Col >
                    <p className='pacifico-regular'>
                        Just to see you smile, I'd do anything that you wanted me to .... in my power 😅 </p>
                    <Image className="imageBox" src="./src/assets/smile.png" rounded fluid />
                </Col>
            </Row>

            <div className="wrapper">
                <Row className='textBox'>
                    <Col ><p className='pacifico-regular'>Nothing better than sharing new experiences
                        and adventures with someone that matches your energy
                    </p></Col>
                </Row>
            </div>

            <Row className='textBox'>
                <Col >
                    <p className='pacifico-regular'>
                        So What do you say <br />
                        Give this guy a shot
                    </p>
                    <Image className="imageBox" src="./src/assets/headChris.jpg" rounded fluid />
                </Col>
            </Row>


            <div className="wrapper">
                <Stack gap={2} className='textBox'>
                    <div className='pacifico-regular'> <h1 > Be My Girl? </h1></div>
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            style={{ margin: '0 10px' }}
                            variant="success"
                            onClick={handleClick}
                        >
                            Yes :D
                        </Button>
                        <Button
                            style={{ margin: '0 10px' }}
                            onClick={handleNo}
                            variant="danger"
                        >
                            No :(
                        </Button>
                    </div>

                    {clickedNo ? <div className='pacifico-regular'> <h1 > Are You Sure? </h1></div>
                        :
                        null
                    }
                </Stack>
            </div>
        </>
    )
}