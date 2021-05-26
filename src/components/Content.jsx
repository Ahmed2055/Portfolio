import React from 'react'
import './Content.css'
import ahmedPic from '../pics/ahmedPic.jpg'
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';

function Content() {
    return (
        <div className='content'>
            <img className='content__image' src={ahmedPic} />
            <div className="content__details">
                <h1 className='contentDetails__name'>Ahmed</h1>
                <h1 className='contentDetails__name'>Samir</h1>
                <p className="contentDetails__position">Frontend Web Developer</p>
                <p className="contentDetails__location"> <RoomIcon fontSize='inherit'  className="contentDetails__locationIcon" /> Ontario, Canada</p>
                <p className="contentDetails__intro">  Hi, I am <span className='cDIB' >Ahmed Samir</span> a Frontend Web Developer . Passionate about coding and Programming and have been training on real life projects for about <span className='cDIB' >2 years</span>  so far. My dream is to have my own tech Startup in the future, this is why I am entrigued to gain more experience in the field. Developed many projects like: React Native-based  Mobile app <a href='#project1' className='contentDetails__introProject'>Online Pharmacy</a> , <a href='https://doctornewproperty.web.app/ar/' className='contentDetails__introProject'>Real-Estate marketing</a> Platform, and Platform for <a href='#project3' className='contentDetails__introProject'>Company Interior Affairs.</a> </p>
                <div className='contentDetails__contact' >
                    <div className='contentDetails__contactLine'></div>
                    <div className='contentDetails__contactText'> <a href='https://wa.me/+201093173917' className='contentDetails__contactLink'>Contact me</a></div>
                </div>
                <div className="contentDetails__Links">
                    <a href="https://wa.me/+201093173917" className="contentDetails__link"><WhatsAppIcon color='inherit' fontSize='large' /></a>
                    <a href="https://www.linkedin.com/in/ahmed-samir-171892129/" className="contentDetails__link"><LinkedInIcon color='inherit' fontSize='large' /></a>
                    <a href="https://github.com/Ahmed2055" className="contentDetails__link"><GitHubIcon color='inherit' fontSize='large' /></a>
                </div>
            </div>
            
        </div>
    )
}

export default Content
