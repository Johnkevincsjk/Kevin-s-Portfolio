import React from 'react'
import '../Intro/Intro.css'
import { motion } from "framer-motion"
import Lottie from 'lottie-react'
import jk from './jk.json'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Intro() {

    return (
        <div className='container-fluid intro' >
            <div className="row mb-5 align-items-center">
                <div className="col-md-6 intro_content">
                    <div className="myname">
                        <motion.pre initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.9, type: "spring", stiffness: 500 }}
                            whileInView={{ opacity: 1, y: 0 }}><h3>Hi there ! Myself</h3>
                            <h1>KEVIN.</h1>
                            <h6>I'm a <h2>Fullstack Developer</h2></h6>
                        </motion.pre>
                        <motion.div initial={{ x: -500 }} transition={{ duration: 0.5, type: "spring", stiffness: 500 }} animate={{ x: 0 }} className='contacts'>
                            <a className='insta' href='https://www.instagram.com/k_e_v_i_n__jk/?igsh=aHM2YjBmZnVwNmFn' target='_blank'><FaInstagram /></a>
                            <a className='Linkedin' href='https://www.linkedin.com/in/kevin-jk-689875238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ1zBxYxRSIaj4CzY5tlm0A%3D%3D' target='_blank'><FaLinkedin /></a>
                            <a className='mail' href='mailto:johnkevin.csjk@gmail.com' target='_blank'><FaEnvelope /></a>
                            <a className='whatsapp' href='https://wa.me/+918056134047' target='_blank'><FaWhatsapp /></a>
                            <a className='github' href='https://github.com/Johnkevincsjk' target='_blank'><FaGithub /></a>
                        </motion.div>
                    </div>
                </div>

                <div className="col-md-6">
                    <Lottie className='Intro_ani' animationData={jk} />
                </div>

            </div>




        </div>


    )
}
