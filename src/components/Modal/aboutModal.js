import React from "react";
import './aboutModal.css';


const AboutModal=(props)=>{
    function clickedOnBackDrop(){
        props.onclickBackdrop()
    }
    return (
    <>
    <div className="backdrop" onClick={clickedOnBackDrop}/>
    <div className="aboutModalFrame">
        <div className="modal-header">
            <h1>Cryptography visualizer</h1>
        </div>
        <h3>About Website</h3>
        <ul>
        <li>This Website gives a visualization of how different Encryption and Decryption Technique Works in Cryptography.</li>
        <li>Here We've talked about on Symmetric key Ciphers which includes substitutional and transpositional ciphers.</li>
        <br />
        <li>Substitutional Cipher</li>
        <ul>
            <li>Ceaser Cipher</li>
            <li>Mono Alphabetic Cipher</li>
            <li>Poly Alphabetic Cipher</li>
            <li>Play Fair Cipher</li>
            <li>Hill Cipher</li>
            <li>One Time Pad Cipher</li>

        </ul>
        {/* </ul> */}
        <br />
        <li>Transposition Cipher</li>
        <ul>
            <li>Rail Fence Ciphers</li>
            <li>Columnar Transposition Cipher</li>
            <li>Double Transposition</li>
            <li>Keyless Cipher</li>
            <li>Keyed Ciphers</li>
        </ul>
        </ul>
    </div>
    </>)
}

export default AboutModal