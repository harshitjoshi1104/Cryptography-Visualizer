function VernamCipherEnc(text,key){
    let newMsg=""
    let k=0
    for(let i=0;i<text.length;i++){
        let val=text[i].charCodeAt(0)
        let newK=key[k].charCodeAt(0)
        console.log("IN")
        if(val>=97 && val<=123){
            val=val-97
            newK=newK-97
            val=(val+newK)%26
            val=val+97
            val=String.fromCharCode(val)
            newMsg+=val
        }
        else{
            val=val-65
            newK=newK-97
            val=(val+newK)%26 
            val=val+65
            val=String.fromCharCode(val)
            newMsg+=val
        }
        k=(k+1)%key.length
        
    }
    return newMsg
}

function VernamCipherDec(text,key){
    let newMsg=""
    let k=0
    for(let i=0;i<text.length;i++){
        let val=text[i].charCodeAt(0)
        let newK=key[k].charCodeAt(0)
        console.log("IN")
        if(val>=97 && val<=123){
            val=val-97
            newK=newK-97
            val=(val-newK)%26
            if(val<0){
                val+=26
            }
            val=val+97
            val=String.fromCharCode(val)
            newMsg+=val
        }
        else{
            val=val-65
            newK=newK-97
            val=(val-newK)%26 
            if(val<0){
                val+=26
            }
            val=val+65
            val=String.fromCharCode(val)
            newMsg+=val
        }
        k=(k+1)%key.length
        
    }
    console.log(newMsg)
    return newMsg
}

function CarryVernamOperation(fieldChange,plainText,key,cipherText){
    if(key.length!==plainText.length || key.length!==cipherText.length){
        return [plainText,key,cipherText]
    }
    if(fieldChange==="plain-field"){
        // console.log(selectedCipher)
        if(key===""){
            return [plainText,key,cipherText]
        }
        else{
            let value=VernamCipherEnc(plainText,key)
            return [plainText,key,value]
        }
        
    }
    else if(fieldChange==="key-field"){
        if(plainText==="" && cipherText===""){
            return [plainText,key,cipherText]
        }
        else if(cipherText===""){
            let value=VernamCipherEnc(plainText,key)
            return [plainText,key,value]
        }
        else if(plainText===""){

        }
        else{
            let value=VernamCipherEnc(plainText,key)
            return [plainText,key,value]
        }
    }
    else if(fieldChange==="cipher-field"){
        if(plainText==="" && cipherText===""){
            return [plainText,key,cipherText]
        }
        else if(plainText===""){
            let value=VernamCipherDec(cipherText,key)
            return [value,key,cipherText]
        }
        else if(cipherText===""){
            let value=VernamCipherDec(cipherText,key)
            return [value,key,cipherText]
        }
        else{
            let value=VernamCipherDec(cipherText,key)
            return [value,key,cipherText]
        }
    }
}


export default CarryVernamOperation;