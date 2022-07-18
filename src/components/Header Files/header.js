import React from "react";
import './header.css'
const Header = (props)=>{

    function AboutHeaderClicked(){
      props.onclickAbout()
    }

    function ContactHeaderClicked(){
      props.onclickContact()
    }

    function changeScreeningHome(event){
      console.log(event.target.value,"clicked")
      props.onChangePage("home")
    }
    function changeScreeningTech(event){
      console.log(event.target.value,"clicked")
      props.onChangePage("tech")
    }

    return (
        <div className="mainHeader">
            {/* <div className="header-left">
                <h1 id="logo-main">crYpto</h1>
            </div> */}


            <div className="header-right">
                <div className="head-items" id="home-page-head" value="home" onClick={changeScreeningHome}>
                  <p name="home">Home</p>  
                </div>
                <div className="head-items" id="tech-page-head" value="tech" onClick={changeScreeningTech}>
                  <p name="tech">Techniques</p>  
                </div>
                <div onClick={AboutHeaderClicked} className="head-items">
                  <p >About</p>  
                </div>
                <div onClick={ContactHeaderClicked} className="head-items">
                  <p>Contact</p>  
                </div>
            </div>
        </div>
    )
}

export default Header;