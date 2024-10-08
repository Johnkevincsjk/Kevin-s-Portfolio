import { useState } from 'react'
import '../NavBar/Nav.css'
import { motion } from "framer-motion"
import { FaChild, FaGithub, FaEnvelope, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {

    const [toggle, settoggle] = useState(false)
    const handletoggle = () => settoggle(!toggle)

    return (
        <div className="nav_main">
            <div className='portfolio'>
                <FontAwesomeIcon icon={faCrown} style={{ marginTop: '6px', marginRight: '5px' }} />
                <motion.h1 initial={{ y: -100 }} transition={{ duration: 1, delay:1 }} animate={{ y: 0 }}>Portfolio</motion.h1>
            </div>

            <motion.div initial={{ x: 100 }} transition={{ duration: 1 }} animate={{ x: 0 }} className="nav_menu">
                <button onClick={handletoggle}><FaChild /></button>
            </motion.div>
            <div className={toggle ? "nav_list" : "nav_listoff"}>
                <ul>
                    <a href="tel:+918056134047"><li><FaPhone className='icons' style={{ marginBottom: 1, marginRight: 5 }} />Call</li></a>
                    <a href='mailto:johnkevin.csjk@gmail.com' target='_blank'><li><FaEnvelope className='icons' style={{ marginBottom: 1, marginRight: 5 }} />Mail</li></a>
                    <a href='https://wa.me/+918056134047' target='_blank'><li><FaWhatsapp className='icons' style={{ marginBottom: 1, marginRight: 5 }} />What's app</li></a>
                    <a href='https://www.linkedin.com/in/kevin-jk-689875238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ1zBxYxRSIaj4CzY5tlm0A%3D%3D' target='_blank'><li><FaLinkedin className='icons' style={{ marginBottom: 1, marginRight: 5 }} />LinkedIn</li></a>
                    <a href='https://github.com/Johnkevincsjk' target='_blank'><li><FaGithub className='icons' style={{ marginBottom: 1, marginRight: 5 }} />Github</li></a>
                </ul>
            </div>
        </div>
    )
}
