import React from 'react'
import './Overview.css'
import { motion } from "framer-motion"


export const Overview = () => {
  return (
    <section id='overview'>
        <motion.div  
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="overview">
            <div className='title-over'>
                <h1>FOR HIGH</h1>  
                <h1>LEVEL</h1> 
                <h1>OVERVIEWS</h1>  
                <h2>BUSINESS STRATEGY</h2>
            </div>
            <div className='text-over'>
                <p>
                     Bring to the table win-win survival strategies to 
                     ensure proactive domination. At the end of the day, 
                     going forward, a new normal that has evolved from generation 
                     X is on the runway heading towards a streamlined cloud solution. 
                     User generated content in real-time will have multiple touchpoints 
                     for offshoring. At the end of the day, going forward, a new normal 
                     that has evolved from generation X is on the runway heading towards 
                     a streamlined cloud solution. 
                </p>
            </div>
            <div className='list-over'>
                <ul className='lista-over'>
                    <li>STRATEGY</li>
                    <li>CONCEPT</li>
                    <li>MARKETING</li>
                    <li>MANAGEMENT</li>
                    <li>DESIGN</li>
                </ul>
            </div>
        </motion.div>
    </section>
  )
}
