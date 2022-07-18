import React, { useState } from "react";
import './tech_Page.css';
import TechniqueDesc from "./tech_desc";
import Ciphers from './all_techniques'

import CarryCeaserCipherEnc from "./Changing Functions/ceaserCipherFunc";
import CarryVigenereOperation from "./Changing Functions/vigenereCipherFunction";
import CarryVernamOperation from "./Changing Functions/vernamCipherFunc";
import CarryHillCipherOperation from "./Changing Functions/hillCipherFunc";
// import VisualizeModal from "../Modal/VisualizeModal/visualModal";
// // import ceaserCipherVisual from './assets/gif_techs/ceaser_cipher_gif.gif'
// import ceaserCipherVisual from '../../assets/gif_techs/ceaser_cipher_gif.gif'
// import vigenereCipherVisual from '../../assets/gif_techs/vigenere_cipher_gif.gif'


const TechniquePage = props=>{

    // const Visuals={
    //     0:ceaserCipherVisual,
    //     1:vigenereCipherVisual
    // }
    // const [showVisuals,setshowVisuals]=useState(0)
    // const [whatToShow,setWhatToShow]=useState(0)
    // function visualClicked(){
    //     setshowVisuals(1)
    // }

    const [data,setData]=useState(Ciphers[0])

    const [plainText,setPlainText]=useState("")
    const [cipherText,setCipherText]=useState("")
    const [keyText,setkeyText]=useState("")

    const [selectedCipher,setSelectedCipher]=useState(-1)

    const showData=<TechniqueDesc sendData={data} />

    function CreateTexts(event){
        // console.log(event.target.name)
        // console.log(selectedCipher)
        if(event.target.name==="plain-field"){
            if(selectedCipher==="0"){
                const arr=CarryCeaserCipherEnc(event.target.name,event.target.value,keyText,cipherText)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])   
            }        
            else if(selectedCipher==="1"){

            }  
            else if(selectedCipher==="2"){
                // console.log()
                const arr=CarryHillCipherOperation(event.target.name,event.target.value,keyText,cipherText)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])
            }  
            else if(selectedCipher==="3"){
                const arr=CarryVigenereOperation(event.target.name,event.target.value,keyText,cipherText)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])  
            }  
            else if(selectedCipher==="4"){
                const arr=CarryVernamOperation(event.target.name,event.target.value,keyText,cipherText)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0]) 
            }  
            else if(selectedCipher==="5"){
                
            }    
        }
        else if(event.target.name==="key-field"){
            if(selectedCipher==="0"){
                const arr=CarryCeaserCipherEnc(event.target.name,plainText,event.target.value,cipherText)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])
            }
            else if(selectedCipher==="1"){

            }  
            else if(selectedCipher==="2"){
                const arr=CarryHillCipherOperation(event.target.name,plainText,event.target.value,cipherText)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])
            }  
            else if(selectedCipher==="3"){
                const arr=CarryVigenereOperation(event.target.name,plainText,event.target.value,cipherText)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])  
            }  
            else if(selectedCipher==="4"){
                const arr=CarryVernamOperation(event.target.name,plainText,event.target.value,cipherText)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])
            }  
            else if(selectedCipher==="5"){
                
            } 
            
        }

        else if(event.target.name==="cipher-field"){
            if(selectedCipher==="0"){
                const arr=CarryCeaserCipherEnc(event.target.name,plainText,keyText,event.target.value)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])
            }
            else if(selectedCipher==="1"){

            }  
            else if(selectedCipher==="2"){
                const arr=CarryHillCipherOperation(event.target.name,plainText,keyText,event.target.value)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])
            }  
            else if(selectedCipher==="3"){
                const arr=CarryVigenereOperation(event.target.name,plainText,keyText,event.target.value)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])  
            }  
            else if(selectedCipher==="4"){
                const arr=CarryVernamOperation(event.target.name,plainText,keyText,event.target.value)
                setCipherText(arr[2])
                setkeyText(arr[1])
                setPlainText(arr[0])
            }  
            else if(selectedCipher==="5"){
                
            } 
        }

    }
    



    function changingSelectBox(event){
        if(event.target.value==="-1"){
            
        }
        else{
            // setWhatToShow(<VisualizeModal v_image={Visuals[selectedCipher]}/>)
            setData(Ciphers[event.target.value])
            setSelectedCipher(event.target.value)
            // console.log(whatToShow)
        }
        
    }
    return <div className="tech-main-page" id="tech-page">
        {/* {showVisuals && whatToShow } */}
        {/* {showVisuals && changingSelectBox()} */}
        <div className="description-tech">
            <div style={{position:"relative",left:"200px",display:"flex",flexDirection:"row-reverse",justifyContent:"space-evenly"}}>
                <select className="selection-box" onChange={changingSelectBox} style={{background:"rgba(255,255,255,0.6)",color:"black",padding:"1mm"}}>
                    <option value="-1">Select</option>
                    <option value="0">Ceaser Cipher</option>
                    <option value="1">Playfair Cipher</option>
                    <option value="2">Hill Cipher</option>
                    <option value="3">Vigenere Cipher</option>
                    <option value="4">Vernam Transposition</option>
                    {/* <option value="5">Rail Fence Cipher</option> */}
                    {/* <option value="6">Columnar Transposition</option> */}
                    {/* <option value="7">Double Transposition</option> */}
                </select>
                {/* <div style={{color:"white",borderRadius:"50%",border:"white 2px solid",width:"20px",height:"20px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}} >`{'l>'}`</div> */}

            </div>
            {showData}
        </div>
        <div className="conversion-container">
            <div className="plain-text">
                <textarea name="plain-field" id="plain-field" rows="7" cols="40" style={{fontSize:"24px",fontWeight:"600",letterSpacing:"1mm",background:"rgba(0,0,0,0.9)",color:"#006E00"}} placeholder="Enter Plain Text" onChange={CreateTexts} value={plainText}/>
            </div>
            <div className="key-text">
                <textarea name="key-field" id="key-field" rows="2" cols="40"style={{fontSize:"24px",fontWeight:"500",background:"rgba(0,0,0,0.9)",color:"#006E00"}} placeholder="Enter Key" value={keyText} onChange={CreateTexts}/>
            </div>
            <h1 style={{margin:"0",padding:'0',fontSize:"26px",color:"white",fontFamily:"sans-serif"}}>Encipherment: <div className="moveBar"></div></h1>
            <div className="cipher-text">
                <textarea name="cipher-field" id="cipher-field" rows="7" cols="40"style={{fontSize:"28px",fontWeight:"500",letterSpacing:"1mm",backgroundColor:"#000000",color:"#006E00"}} placeholder="Enter Cipher Text" value={cipherText} onChange={CreateTexts}/>
            </div>
        </div>
    </div>
}

export default TechniquePage;