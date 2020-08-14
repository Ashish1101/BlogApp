import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './dashboard.css'

const Footer = () => {
     let dt = new Date()
    return (
         <footer>
             <div>All right reserved &copy; {dt.getFullYear()}</div>
                <div className="follow">
                   <div>Follow</div>
                    <div className="iconsPadding">
                          <a href="https://www.instagram.com/ashishshakya98/"><InstagramIcon color="primary" /></a>
                          <a href="https://twitter.com/shivamk321"><TwitterIcon color="primary" /></a>
                         <a href="https://www.linkedin.com/in/ashishshakya98/"><LinkedInIcon color="primary" /></a>
                           
                   <a href="https://github.com/Ashish1101"><GitHubIcon color="primary" /></a> 
                    </div>
                </div>
            </footer>
    )
}

export default Footer