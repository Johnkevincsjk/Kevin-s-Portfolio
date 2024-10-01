
import '../Projects/Projects.css'
import { motion } from 'framer-motion'
import Projects_one from '../Components/Projects/Projects_one'
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Projects() {
    return (
        <div className='Project_body'>

            <motion.h2 initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 500 }} whileInView={{ x: 0, opacity: 1 }}>Projects <FaAngleDoubleDown /></motion.h2>
            <div className="projects_cards">
                <div className="project1 p-2">
                    <Projects_one
                        img="project1.jpg"
                        title='Bulk Mailer Project'
                        summary='A robust bulk mailer application built with the MERN stack (MongoDB, Express.js, React, Node.js). It features secure user authentication, contact management, email template creation, bulk email sending, and an analytics dashboard to track campaign performance.'
                        demousername="demouser123@gmail.com"
                        password='12345678'
                        link="https://main--jovial-figolla-438fd1.netlify.app/"
                    />
                </div>

                <div className="project2 p-2">
                    <Projects_one
                        img="Kingswear.png"
                        title='Kingswear: A Fashion E-commerce Platform'
                        summary='This full-stack fashion e-commerce platform lets users browse, select, and purchase clothing with features like dynamic product pages, a shopping cart, and Razorpay payment integration. It offers secure, personalized shopping with user authentication for a seamless experience.'
                        demousername="demouser@gmail.com"
                        password='12345678'
                        link="https://main--king-swear.netlify.app/"
                    />
                </div>
                <div className="project3 p-2">
                    <Projects_one
                        img="passwordreset.png"
                        title='Password Reset Flow Implementation'
                        summary='Implemented a secure password reset flow, allowing users to request a reset link via email. The flow includes a time-sensitive reset link and a password reset form with validation. Passwords are hashed and stored securely, ensuring user account protection and a smooth recovery process.'
                        demousername="demouser@gmail.com"
                        password='12345678'
                        link="https://fascinating-fenglisu-4af399.netlify.app/"
                    />
                </div>

            </div>

        </div>
    )
}
