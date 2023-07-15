import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blacklogo.svg'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='18' />
                    <p>Why on earth are people paying for digital real estate? (Ep. 587)</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='18' />
                    <p>The Overflow #185: The hardest part of software is requirements</p>
                </div>
            </div>

            <h4>Featured on Meta</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="pen" width='18' />
                    <p>Starting the Prompt Design Site: A New Home in our Stack Exchange Neighborhood</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="pen" width='18' />
                    <p>Colors update: A more detailed look</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blackLogo} alt="pen" width='18' />
                    <p>Temporary policy: Generative Al (e.g. ChatGPT) is banned</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blackLogo} alt="pen" width='18' />
                    <p>Testing native, sponsored banner ads on Stack Overflow (starting July 6)</p>
                </div>
            </div>

            <h4>Hot Meta Posts</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                <p>5</p>
                    <p>What to do with Tor Onion links in questions?</p>
                </div>
            </div>
        </div>
    )
}

export default Widget