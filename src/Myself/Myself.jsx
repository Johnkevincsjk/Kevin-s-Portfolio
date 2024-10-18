import React from 'react'
import { motion } from 'framer-motion'
import './Myself.css'
import myself from '../Components/assets/myself.json'
import Lottie from 'lottie-react'
import { GiStrongMan } from "react-icons/gi";

export default function Myself() {



    return (

        <div initial={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.9 }}
            whileInView={{ opacity: 1, scaleX: 1 }} className='container-fluid Myself'>
            <div className="myself_sec1">
                <motion.h1 initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 500 }} whileInView={{ x: 0, opacity: 1 }}>About Myself </motion.h1><motion.span initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 500 }} whileInView={{ x: 0, opacity: 1 }}><GiStrongMan /></motion.span>
            </div>
            <motion.div className=' col self1'
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.9, type: 'spring' }}
                whileInView={{ opacity: 1, scale: 1 }}>
                <h6>Hey !, I'm a fullstack developer and Here is something about me.
                    I am currently learning new skills with a vision of becoming better at what I do. I like Web Development and to Create a new Interfaces. I enjoy learning about technology and helping others use it to improve their lives and be more productive. I also have Frontend skills in HTML, CSS, Javascript, React js and Backend skills in node js, mongoDB, express.
                </h6>
                <a href='https://drive.google.com/file/d/1uHWxebr4cJY1P92t1jKhr5wGSM4r07U9/view?usp=drivesdk' target='_blank'><motion.button initial={{ scale: 1 }} transition={{ duration: 0.2, type: 'spring', stiffness: 700 }} whileHover={{ scale: 1.1 }}>Download Resume</motion.button></a> {/* Resume is placed here */}
            </motion.div>
            <div className="myself_sec2">
                <Lottie className=' myself_ani1' animationData={myself} />
            </div>

            <div className="col myself_sec3 curr-ex">
                <h1>Current Work Experience</h1>
                <div className='my_experience'>
                    <p>
                        I am currently working as a Backend Executive at <span style={{ color: '#ffbd39' }}>Bajaj Allianz General Insurance</span> for the past <span style={{ color: '#ffbd39' }}>3 years</span>.
                        In this role, I manage backend operations, optimize databases, and ensure seamless integration of systems.
                        My responsibilities include handling data processing, troubleshooting backend issues, and collaborating with cross-functional teams to enhance system efficiency.
                    </p>
                </div>
            </div>

            <div className="col myself_sec3">
                <h1>Experience</h1>
                <div className='my_experience'>
                    <p>Over the past 8 months,<span style={{ color: '#ffbd39' }}>I completed the MERN Stack Developer course at Guvi, an initiative by IIT Madras.</span> This intensive program provided hands-on experience with MongoDB, Express.js, React, and Node.js, enhancing my full-stack development skills. The curriculum was comprehensive and industry-relevant, preparing me for real-world challenges. Here is a link to my certificate.</p>
                    <a href="https://www.guvi.in/share-certificate/6Y1ljz6470g1f0872Q" target='_blank'><motion.button initial={{ scale: 1 }} transition={{ duration: 0.2, type: 'spring', stiffness: 700 }} whileHover={{ scale: 1.1 }} id='certificate_btn'>Download</motion.button></a>
                </div>
            </div>

        </div>
    )
}
