import React from 'react'
import { motion } from 'framer-motion'
import './Myself.css'
import myself from '../Components/assets/myself.json'
import indianflag from '../Components/assets/Indianflag.json'
import Lottie from 'lottie-react'
export default function Myself() {



    return (
        
        <div initial={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.9 }}
            whileInView={{ opacity: 1, scaleX: 1 }} className='Myself'>
            <Lottie className=' myself_ani' animationData={myself} />



            <motion.div className=' col self1'
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.9, type: 'spring' }}
                whileInView={{ opacity: 1, scale: 1 }}>
                <h1>About Myself </h1>
                <Lottie className='ani_flag' animationData={indianflag} />
                <h6>Hey ! , I'm a fullstack developer and Here is something about me.
                    I am currently learning new skills with a vision of becoming better at what I do. I like Web Development and to Create a new Interfaces. I enjoy learning about technology and helping others use it to improve their lives and be more productive. I also have Frontend skills in HTML, CSS, Javascript, React js and Backend skills in node js, mongoDB, express.
                </h6>
                <a href=''><motion.button initial={{ scale: 1 }} transition={{ duration: 0.2, type: 'spring', stiffness: 700 }} whileHover={{ scale: 1.1 }}>Download Resume</motion.button></a>
            </motion.div>



        </div>
    )
}
