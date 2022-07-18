import React from "react";
import './homePage.css';
import githubImage from '../../assets/github-image.png';
import websiteImage from '../../assets/internet-image.png'
import linkedinImage from '../../assets/linkedin-image.png'
// import hackerImage from '../../assets/hacker-image.webp'


const HomePage=(props)=>{

    function decryptText(event){
        event.target.value="WELCOME TO THE CYBERWORLD"
        var value1=document.getElementById("changingText")
        value1.innerHTML="WELCOME TO THE CYBERWORLD"
    }
    function cryptText(event){
        event.target.value="XPPRTIO UM LWO KLVCNDLOLS"
        var value1=document.getElementById("changingText")
        value1.innerHTML="XPPRTIO UM LWO KLVCNDLOLS"
    }

    function DisablingContactModal(){
        props.onhoverOutTech()
    }

    function changeScreeningTech(event){
        console.log(event.target.value,"clicked")
        props.onChangePage("tech")
      }
    return (
        <div onMouseOver={DisablingContactModal}>
            <br />
            <br />

            <div className="home-mid" id="home-page">
                <div className="home-mid-left">
                   <div className="centering-div">
                        <h1 className="home-mainHeading">Cryptography Visualizer</h1>
                        {/* <p className="mainP" style={{color:"wheat",fontWeight:"16px"}}>WHEN CRYPTOGRAPHY IS OUTLAWED.</p> */}
                        <p className="mainP" style={{color:"rgba(240, 255, 255, 0.611)",fontWeight:"16px"}}>THERE IS NOTHING CONCEALED THAT WILL NOT BE DISCLOSED.</p>
                        <p id="changingText" style={{cursor:"pointer",lineHeight:"0.3mm",color:"rgba(240, 255, 255, 0.611)",display:"flex"}} onMouseEnter={decryptText} onMouseOut={cryptText}>XPPRTIO UM LWO KLVCNDLOLS</p>
                   </div>
                    <div className="home-mid-btn">
                        <button className="free-try-btn" onClick={changeScreeningTech}>Explore Now</button>
                        <button className="sign-in-btn">Sign up</button>
                    </div>
                </div>

                {/* <div className="home-mid-right">
                    <img src={hackerImage} alt="hackerImage" style={{width:"100%",height:"150%"}}/>
                </div> */}
            </div>

            <div className="home-lower" style={{color:"white"}}>
                {/* <h3>Follow us -</h3> */}
                <div className="social-account">
                    <div title="Github" style={{width:"9mm",height:"9mm",borderRadius:"8px",cursor:"pointer"}}><a href="https://github.com/harshitjoshi1104" target="_blank" rel="noreferrer"><img width="100%" height="100%" src={githubImage} alt="githubImage"/></a></div>
                    <div title="Linkedin" style={{width:"9mm",height:"9mm",borderRadius:"8px",cursor:"pointer"}}><a href="https://github.com/harshitjoshi1104" target="_blank" rel="noreferrer"><img width="100%" height="100%" src={linkedinImage} alt="githubImage"/></a></div>
                    <div title="Instagram" style={{width:"9mm",height:"9mm",borderRadius:"8px",cursor:"pointer"}}><a href="https://www.instagram.com/harshitjoshi11/" target="_blank" rel="noreferrer"><img width="100%" height="100%" src={githubImage} alt="githubImage"/></a></div>
                    <div title="Website" style={{width:"9mm",height:"9mm",borderRadius:"8px",cursor:"pointer"}}><a href="https://harshitjoshi1104.github.io/myPersonal/" target="_blank" rel="noreferrer"><img width="100%" height="100%" src={websiteImage} alt="githubImage"/></a></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;