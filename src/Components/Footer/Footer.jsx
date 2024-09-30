import React from 'react'
import { FaArrowRight, FaEnvelope, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
export default function Footer() {
    return (
        <div className="contact">
            <motion.h6 initial={{ x: 800 }} animate={{ x: 0 }} transition={{ duration: 2 }}  ><FaArrowRight /></motion.h6>



            <div className="social_acc">
                <div className="thx">
                    <h5><u>Thanks for visiting!</u></h5>
                    <p>If you like my work feel free to connect me on LinkedIn.</p>
                </div>
                <div className="protfolio">
                    <h5><u>Portfolio</u></h5>
                    <a href="#intro">Intro</a>
                    <a href="#myself">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </div>
                <div className="social_acc1">
                    <h5><u>Connect</u></h5>
                    <ul>
                        <a href="tel:+918056134047"><li><FaPhone className='icons' style={{ marginBottom: 1, marginRight: 5 }} />Call</li></a>
                        <a href='mailto:johnkevin.csjk@gmail.com' target='_blank'><li><FaEnvelope className='icons' style={{ marginBottom: 1, marginRight: 5 }} />Mail</li></a>
                        <a href='https://wa.me/+918056134047' target='_blank'><li><FaWhatsapp className='icons' style={{ marginBottom: 1, marginRight: 5 }} />What's app</li></a>
                        <a href='https://www.linkedin.com/in/kevin-jk-689875238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ1zBxYxRSIaj4CzY5tlm0A%3D%3D' target='_blank'><li><FaLinkedin className='icons' style={{ marginBottom: 1, marginRight: 5 }} />LinkedIn</li></a>
                        <a href='https://www.instagram.com/k_e_v_i_n__jk/?igsh=aHM2YjBmZnVwNmFn' target='_blank'><li><FaInstagram className='icons' style={{ marginBottom: 1, marginRight: 5 }} />Instagram</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
