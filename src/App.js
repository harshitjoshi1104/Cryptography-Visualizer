// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Header from "./components/Header Files/header";
import HomePage from './components/Main Page/homePage';
import TechniquePage from './components/Techniques Page/tech_Page';
import AboutModal from './components/Modal/aboutModal';
import ContactModal from './components/Modal/ContactPage/contactModal';

// import TechniquesModal from './components/Modal/techModal';

function App() {

  const [homePage,setHomePage]=useState(1)
  const [techPage,setTechPage]=useState(0)

  const [aboutModalEnable,setAboutModalEnable]=useState(0)

  const [contactModal,setContactModal]=useState(0)
  
  // const [hoverTech,setHoverTech]=useState(0)
  function changingScreen(item){
    console.log("Inside Changer",item)
    if(item==="home"){
      setHomePage(1)
      setTechPage(0)
      document.getElementById("home-page-head").style("border-bottom").value="2px solid white";
      document.getElementById("tech-page-head").style("border-bottom").value="none";

    }
    else{
      setHomePage(0)
      setTechPage(1)
      document.getElementById("tech-page-head").style("border-bottom").value="2px solid white";
      document.getElementById("home-page-head").style("border-bottom").value="none";
    }
  }


  function EnableModalAbout(){
    setAboutModalEnable(1)
  }

  function DisableModalAbout(){
    setAboutModalEnable(0)
  }

  function EnableContactModal(){
    setContactModal(1)
  }
  function DisableContactModal(){
    setContactModal(0)
  }


  return (
    <div className="mainPage">
      <Header onclickAbout={EnableModalAbout} onChangePage={changingScreen} onclickContact={EnableContactModal}/>
      {homePage &&<HomePage onChangePage={changingScreen}/>}
      {techPage &&<TechniquePage />}
      {aboutModalEnable && <AboutModal onclickBackdrop={DisableModalAbout} />}
      {/* {hoverTech && <TechniquesModal />} */}
      {contactModal && <ContactModal onclickBackdrop={DisableContactModal}/>}
    </div>
    );
}

export default App;
