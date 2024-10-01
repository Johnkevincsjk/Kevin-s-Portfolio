import React from 'react'
import '../Projects/Project_one.css'
import { motion } from 'framer-motion'

export default function Projects_one(props) {
    return (
        <div className="container-fluid card_main">
            <div className='project_one row'>
                <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ type: "spring", stiffness: 500, duration: 0.5 }} className="project_card col-md-6">
                    <img id='project1_img' src={props.img} alt="" />
                    <div className="card_body">
                        <h5>User Name:</h5>
                        <p>{props.demousername}</p>
                        <h5>Password:</h5>
                        <p>{props.password}</p>
                        <motion.a initial={{ scale: 1 }} transition={{ duration: 0.2, type: 'spring', stiffness: 700 }} whileHover={{ scale: 1.1 }} href={props.link} target='_black' className="btn btn-primary">Try now</motion.a>
                    </div>

                </motion.div>
                <div className="project_Content col-md-6">
                    <h1 id='project_name'><span style={{ color: "#c038ff" }}>{props.title}</span> Project</h1>
                    <p id='project_content'>{props.summary}</p>
                </div>
            </div>
        </div>


    )
}
