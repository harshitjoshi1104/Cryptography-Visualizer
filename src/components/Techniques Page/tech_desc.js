import React from 'react';
import './tech_desc.css';
const TechniqueDesc=props=>{
    console.log("Va")
    const dataVal=props.sendData;

    return <div>
        <div className='heading-of-tech'>
            <h1>{dataVal.heading}</h1>
        </div>
        <div className='desc-of-tech'>
            {dataVal.description}
        </div>
        <div className='example-of-tech'>
            <p><b>Example : </b></p>
            <pre>         <b>Plain Text : </b>{dataVal.examplePlainText}</pre>
            <pre>         <b>Key: </b>{dataVal.exampleKey} </pre>
            <pre>         <b>Cipher Text: </b>{dataVal.exampleCipherText}</pre>
        </div>
        <div className='solution-of-tech'>
            <pre style={{fontSize:"20px",color:"wheat"}}>Solution:</pre>
            {/* <p>asdadasd iaodoi asd ioadio aido aid aoid oai ioado aido aiod aio daiosd aiodaid iaod iaido aiod aiod iaodio </p> */}
            {dataVal.solution}
        </div>
    </div>
}

export default TechniqueDesc;