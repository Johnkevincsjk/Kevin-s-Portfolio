
import '../Projects/Projects.css'
import { motion } from 'framer-motion'
import Projects_one from '../Components/Projects/Projects_one'

export default function Projects() {
    return (
        <div className='Project_body'>

            <motion.h2 initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 500 }} whileInView={{ x: 0, opacity: 1 }}>Projects</motion.h2>
            <div className="projects_cards">
                <div className="project1 p-2">
                    <Projects_one
                        img="project1.jpg"
                        title='Bulk Mailer Project'
                        summary='A robust bulk mailer application built with the MERN stack (MongoDB, Express.js, React, Node.js). It features secure user authentication, contact management, email template creation, bulk email sending, and an analytics dashboard to track campaign performance.'
                        demousername="demouser123@gmail.com"
                        password='12345678'
                    />
                </div>

                <div className="project2 p-2">
                    <Projects_one
                        img="Kingswear.png"
                        title='Kingswear: A Fashion E-commerce Platform'
                        summary='A robust bulk mailer application built with the MERN stack (MongoDB, Express.js, React, Node.js). It features secure user authentication, contact management, email template creation, bulk email sending, and an analytics dashboard to track campaign performance.'
                        demousername="demouser@gmail.com"
                        password='12345678'
                    />
                </div>

            </div>

        </div>
    )
}
