import React from 'react'
import './LatestProjects.css'
import ReactPlayer from "react-player";
import doctor1 from '../pics/doctor1.png'
import doctor2 from '../pics/doctor2.png'
import doctor3 from '../pics/doctor3.png'
import doctor4 from '../pics/doctor4.png'

function LatestProjects() {
    return (
        <div className='latestProjects'>
            <h1 className="latestProjects__title">Latest Projects</h1>
            
            <div className="projectDev">
                <a href='#project1' className='projectTitle__link'><h2 className="project__title">Online-Pharmacy Store Platform</h2></a>
                <ReactPlayer id='project1' width={window.innerWidth*0.4} height={window.innerWidth*0.9*0.56}  url="https://www.youtube.com/watch?v=jYgMBdASsxQ" />
            </div>
            <div className="projectDev">
                <a href='' className='projectTitle__link'><h2 id='project2' className="project__title">Real-Estate Marketing Platform</h2></a>
                <div className="projectPics">
                    <img src={doctor1} alt="Real-Estate Marketing Platform" className="projectPic" />
                    <img src={doctor2} alt="Real-Estate Marketing Platform" className="projectPic" />
                    <img src={doctor3} alt="Real-Estate Marketing Platform" className="projectPic" />
                    <img src={doctor4} alt="Real-Estate Marketing Platform" className="projectPic" />
                </div>
            </div>
            <div className="projectDev">
                <a href='' className='projectTitle__link'><h2 id='project3' className="project__title">Company Interior Affairs Platform</h2></a>
                <div className="projectPics">
                    <img src={doctor1} alt="Real-Estate Marketing Platform" className="projectPic" />
                    <img src={doctor2} alt="Real-Estate Marketing Platform" className="projectPic" />
                    <img src={doctor3} alt="Real-Estate Marketing Platform" className="projectPic" />
                    <img src={doctor4} alt="Real-Estate Marketing Platform" className="projectPic" />
                </div>
            </div>
        </div>
    )
}

export default LatestProjects
