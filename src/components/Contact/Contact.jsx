import React from 'react'
import './Contact.css';
import {HiLocationMarker} from 'react-icons/hi';
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
import { motion } from "framer-motion"


export const Contact = () => {
  return (
    <section id='contact'>
        <motion.div 
         initial={{ scale: 0.5 }}
         whileInView={{ scale: 1 }}
         transition={{ duration: 1 }}
        className="contact">
            <div className="title-contact">
                <h1>GET IN TOUCH!</h1>
                <span>We align leaders around a shared purpose and strategic story that</span> <br />
                <span>catalyzes their business and brand to take action.</span>
            </div>

             <div className="text-contact">
                <div className="txt-cont">
                    <div className="icon-cont">
                        <HiLocationMarker   size={50}/>
                    </div>
                    <h2>Adress</h2>
                  <span>121 Rock Sreet, 21 Avenue,</span> 
                  <span>New York, NY 92103-9000</span>
                </div>

                <div className="txt-cont">
                   <div className="icon-cont">
                     <MdOutlineEmail  size={50}/>
                   </div>
                    <h2>Email</h2>
                    <span>hello@gmail.com</span> 
                    <span>support@gmail.com </span>
                </div>

                <div className="txt-cont">
                    <div className="icon-cont">
                          <AiOutlinePhone  size={50}/>
                    </div>
                    <h2>Call Us</h2>
                    <span>1 (234) 567-891</span> 
                    <span>1 (234) 987-654   </span>
                </div>
            </div> 
        </motion.div>
    </section>
  )
}
