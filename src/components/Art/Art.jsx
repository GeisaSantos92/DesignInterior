import React from 'react'
import './Art.css';
import Work from '../../assets/work.jpg';
import { BsLightbulb } from 'react-icons/bs';
import { GoProject } from 'react-icons/go';
import { AiOutlineStar } from 'react-icons/ai';
import { IoIosColorPalette} from 'react-icons/io'
import { BiSupport} from 'react-icons/bi';
import { AiFillGithub} from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion"



export const Art = () => {
  return (
    <section id="art">
        <div className="art">
       
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5}}
            className="left-art">
                <h2>MODERN</h2>
                <h1>INTERIOR STUDIO</h1>
                <p>
                    Adding items that have that natural feel or are from organic
                    would give our homes the warmth of nature.
                </p>

                <div className="grid-art">

                <Container>
                    <Row>
                        <Col className='coluna'>
                            <BsLightbulb size={50}/>
                            <span>Idea</span>
                        </Col>
                        <Col className='coluna'>
                            <BiSupport size={50} />
                            <span>Support</span>
                        </Col>
                        <Col className='coluna'>
                            <GoProject size={50} />
                            <span>Project</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='coluna'>
                            <AiFillGithub size={50}/>
                            <span>Portfolio</span>
                        </Col >
                        <Col className='coluna'>
                            <AiOutlineStar size={50}/>
                            <span>Design</span>
                        </Col>
                        <Col className='coluna'>
                            <IoIosColorPalette size={50}/>
                            <span>Color</span>
                        </Col>
                    </Row>
                </Container>                    
                </div>
            </motion.div>
          
           
            <div className="right-art">
                <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={Work} alt="" />
            </div>
          
        </div>
    </section>
  )
}
