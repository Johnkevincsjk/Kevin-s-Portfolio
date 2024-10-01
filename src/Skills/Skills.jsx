import '../Skills/Skills.css'
import { motion } from "framer-motion"
import { MdHandyman } from "react-icons/md";

import React from 'react'

export default function Skills() {
    return (
        <div className='container-fluid skills_section'>
            <div className="skill_header">
                <motion.h1 initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 500 }} whileInView={{ x: 0, opacity: 1 }}>Professional Skillset <MdHandyman /></motion.h1>
            </div>



            <div className='row mx-1 skill_body justify-content-evenly align-items-center '>
                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="html.png" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='html' className="  progress-bar progress-bar-striped progress-bar-animated"></div><span className='Skill_percentagetext'>70%</span>
                        </div>
                    </div>

                </motion.div>



                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="css.png" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='css' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>85%</span>
                        </div>
                    </div>

                </motion.div>




                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="js.png" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='JS' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>65%</span>
                        </div>
                    </div>

                </motion.div>






                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="bootstrap.jpg" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='JS' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>65%</span>
                        </div>
                    </div>

                </motion.div>






                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="https://seeklogo.com/images/R/react-logo-65B7CD91B5-seeklogo.com.png" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='react' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>80%</span>
                        </div>
                    </div>

                </motion.div>







                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ uration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="nodejs.png" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='Node' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>85%</span>
                        </div>
                    </div>

                </motion.div>







                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="mysql.jpg" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='Mysql' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>45%</span>
                        </div>
                    </div>

                </motion.div>






                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2Cl7TKrJZnqIcySObGhSToz0G8jAHbfryA&s" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='Express' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>60%</span>
                        </div>
                    </div>

                </motion.div>






                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="mongodb.png" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='Mongo' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>70%</span>
                        </div>
                    </div>

                </motion.div>


                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="github.png" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='Git' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>80%</span>
                        </div>
                    </div>

                </motion.div>






                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ uration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="vscode.jpg" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='VS' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>85%</span>
                        </div>
                    </div>

                </motion.div>






                <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} className='col-md-3 skills_cards'>
                    <div className='Skill_image'>
                        <img src="postman-icon.webp" />
                    </div>
                    <div className="skill_name">

                    </div>
                    <div className="Skill_percentage">
                        <div className="progress " role="progressbar " aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div id='Postman' className=" progress-bar progress-bar-striped progress-bar-animated" ></div><span className='Skill_percentagetext'>85%</span>
                        </div>
                    </div>

                </motion.div>



            </div>






        </div>
    )
}
