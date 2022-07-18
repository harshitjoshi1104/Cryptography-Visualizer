
function CeaserCipherEnc(text,key){
    key=parseInt(key)
    // console.log(key2)
    let newMsg=""
    for(let i=0;i<text.length;i++){
        let val=text[i].charCodeAt(0)
        if(val>=97 && val<=123){
            val=val-97
            val=(val+key)%26
            val=val+97
            val=String.fromCharCode(val)
            newMsg+=val
        }
        else{
            val=val-65
            val=(val+key)%26
            val=val+65
            val=String.fromCharCode(val)
            newMsg+=val
        }
        
    }
    // console.log(newMsg)
    return newMsg
}

function CeaserCipherDec(text,key){
    if(text===""){
        return ""
    }
    key=parseInt(key)
    // console.log(key2)
    let newMsg=""
    for(let i=0;i<text.length;i++){
        let val=text[i].charCodeAt(0)
        if(val>=97 && val<=123){
            val=val-97
            val=(val-key)%26
            if(val<0)
            {val+=26}
            val=val+97
            val=String.fromCharCode(val)
            newMsg+=val
        }
        else{
            val=val-65
            val=(val-key)%26
            if(val<0)
            {val+=26}
            val=val+65
            val=String.fromCharCode(val)
            newMsg+=val
        }
        
    }
    // console.log(newMsg)
    return newMsg
}

function CarryCeaserOperation(fieldChange,plainText,key,cipherText){
    if(fieldChange==="plain-field"){
        // console.log(selectedCipher)
        if(key===""){
            return [plainText,key,cipherText]
        }
        else{
            let value=CeaserCipherEnc(plainText,key)
            return [plainText,key,value]
        }
        
    }
    else if(fieldChange==="key-field"){
        if(plainText==="" && cipherText===""){
            return [plainText,key,cipherText]
        }
        else if(cipherText===""){
            let value=CeaserCipherEnc(plainText,key)
            return [plainText,key,value]
        }
        else if(plainText===""){

        }
        else{
            let value=CeaserCipherEnc(plainText,key)
            return [plainText,key,value]
        }
    }
    else if(fieldChange==="cipher-field"){
        if(plainText==="" && cipherText===""){
            return [plainText,key,cipherText]
        }
        else if(plainText===""){
            let value=CeaserCipherDec(cipherText,key)
            return [value,key,cipherText]
        }
        else if(cipherText===""){
            let value=CeaserCipherDec(cipherText,key)
            return [value,key,cipherText]
        }
        else{
            let value=CeaserCipherDec(cipherText,key)
            return [value,key,cipherText]
        }
    }
}

CarryCeaserOperation()
export default CarryCeaserOperation;
export {CeaserCipherDec};