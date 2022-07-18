import React from 'react';
import './contactModal.css'

const ContactModal=props=>{
    function formSubmitted(event){
        event.preventDefault()
        alert("Form submitted successfully")
    }

    function closeModal(){
        props.closingModal()
    }
    function clickedOnBackDrop(){
        props.onclickBackdrop()
    }

    return <div className='contact-form'>
        <div className='backdrop' onClick={clickedOnBackDrop}/>
        <form onSubmit={formSubmitted} className="form-creater">
            <h1 style={{color:"white",margin:"0",padding:'0',fontFamily:"Poppins,sans-serif"}}>Contact Form</h1>
            <div className='name-div'>
                <input placeholder='First Name' className='input-contact-form' style={{fontSize:"20px",width:"48%",height:"35px"}}></input>
                <input placeholder='Last Name' className='input-contact-form' style={{fontSize:"20px",width:"48%",height:"35px"}}></input>
            </div>
            <input placeholder='Email Address' className='input-contact-form'style={{width:"100%",fontSize:"22px",height:"35px"}}></input>
            <textarea rows={8} placeholder='Any Query' className='input-contact-form' style={{width:"100%",fontSize:"20px"}}></textarea>
            <div className='btn-contact-form'>
                <button id='submit-btn' onClick={formSubmitted}>Submit</button>
                <button id='cancel-btn' onClick={closeModal}>Cancel</button>
            </div>
        </form>
    </div>
}

export default ContactModal