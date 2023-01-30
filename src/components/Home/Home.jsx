import React from 'react'
import { Header} from '../Header/Header';
import './Home.css';
import { motion } from "framer-motion"

export const Home = () => {
  return (
    <section id='home'>
       <div className="header">
         <Header/> 
       </div>
        <div className='home'>             
            <div className="left-home"></div>
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1}}
            className="right-home ">
                  <h2>MINIMALIST INTERIOR </h2>
                  <h1>DESIGN</h1>
                  <p>
                    The architectural reimagining of the space began 
                    with the idea of paring away everything to a state 
                    of emptiness and using three axes from the underlying 
                    structure to shape the new geometry. 
                  </p>
            </motion.div>
        </div>
    </section>
  )
}
