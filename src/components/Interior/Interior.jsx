import React from 'react'
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import './Interior.css'
import { motion } from "framer-motion"


export const Interior = () => {
  return (
    <section id="interior">
        <div className="interior">
            <div className="title-interior">                
                <h2> DECORATING SECRETS</h2>
                <h1>INTERIOR ART</h1>
            </div>
            <div className="img-interior">
                <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                 src={Img1} alt="" />
                <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={Img2} alt="" />
                <motion.div 
                initial={{ opacity: 0, scale: 0.5}}
                whileInView={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.5 }}
                className="text-interior">
                    <span>ARTWORKS</span> 
                    <span>ARTISTS</span> 
                    <span>MAGAZINE</span> 
                    <span>TERMS OF USE</span>    
                </motion.div>
            </div>
            <div className="bg"></div>
        </div>
    </section>
  )
}
