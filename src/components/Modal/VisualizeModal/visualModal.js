import React from "react";
import './visualModal.css';
const VisualizeModal=props=>{
    return (
        <div className="visual-modal">
            <div className="backdrop"
            />
            <img className="imageVis" src={props.v_image} alt=""/>
        </div>

    )
}

export default VisualizeModal