import React from 'react'
import './Design.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.png'
import Img6 from '../../assets/img6.png'
import Img7 from '../../assets/img7.png'
import { motion } from "framer-motion"


export const Design = () => {
  return (
    <section id='design'>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="design">
            <div className="grid-design">
            <Container>
                <Row>
                    <Col xs={4}  >
                        <img src={Img4} alt="" />
                    </Col>
                    <Col className='img-design'  xs={2}>
                        <img src={Img5} alt="" />
                    </Col>
                    <Col className='img-design' xs={3}>
                        <img src={Img6} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} className='text-grid '>
                        <h1>THAI STYLE HOME</h1>
                        <h1>WABI SABI</h1>
                        <p>
                            The home is surrounded by a landscaped 
                            garden and there are lots of different 
                            neighbours in the area.  The average home 
                            is created for a single family.
                        </p>
                    </Col>
                    <Col xs={5}>
                        <img src={Img7} alt="" />
                    </Col>
                </Row>
            </Container>
            </div>
        </motion.div>
    </section>
  )
}
