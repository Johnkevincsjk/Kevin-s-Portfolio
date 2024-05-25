import React from 'react'
import '../Projects/Project_one.css'

export default function Projects_one() {
    return (
        <div className='project_one'>
            <div className="card" style={{ width: "18rem",backgroundColor:'#FFFFF0', height:'auto' }}>
                <img src="pro1.jpg" className="card-img-top pro1" style={{height:'200px', width:'100%'}} />
                <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:'bolder'}}>Bulk Mailer Project</h5>
                   <p><b>Demo Username :</b> demouser123@gmail.com</p>
                   <p><b>Password :</b> 12345678</p>
                    <a  href="https://main--jovial-figolla-438fd1.netlify.app/" target='_black' className="btn btn-primary">Try now</a>
                </div>
            </div>


        </div>

    )
}
