function matrixMultiplication(A,B){
    let i, j, k;
    let C=[]
    for (i = 0; i < A.length; i++) {
        let sum = 0;
        for (j = 0; j < B[0].length; j++) {
            for (k = 0; k < A.length; k++)
                sum += A[i][k] * B[k][j];
        }
        C.push(sum%26)
    }
    let newMsg=""
    for(i=0;i<C.length;i++){
        let pq=C[i]+97
        let val=String.fromCharCode(pq)
        newMsg+=val
    }
    return newMsg
}

function convertKey2numArr(key){
    if(key.length===1 || key.length===4 || key.length===9 || key.length===25 || key.length===36 || key.length===49 || key.length===64){
        let C=[]
        let N=Math.pow(key.length,0.5)
        let k=0;
        for(let i=0;i<N;i++){
            let newArr=[]
            for(let j=0;j<N;j++){
                let newK=key[k].charCodeAt(0)-97
                newArr.push(newK)
                k+=1
            }
            C.push(newArr)
        }
        return C
    }
    else{
        return false
    }
}


function HillCipherEnc(text,key){
    if(text===""){
        return ""
    }
    let encMsg=""
    key=convertKey2numArr(key)
    if(key===false){
        console.log("F")
        return ""
    }
    let i=0
    let N=key.length
    while (i<text.length){
        let B=[]
        for(let z=i;z<i+N;z++){
            B.push([[text[z].charCodeAt(0)-97]])
        }
        encMsg+=matrixMultiplication(key,B)
        i=N+i
    }
    return encMsg
}

function HillCipherDec(text,key){
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

function CarryHillCipherOperation(fieldChange,plainText,key,cipherText){

    if(fieldChange==="plain-field"){
        // console.log(selectedCipher)
        if(key===""){
            console.log("Wrong")
            return [plainText,key,cipherText]
        }
        else{
            console.log("Inside Hill Cipher")
            let value=HillCipherEnc(plainText,key)
            return [plainText,key,value]
        }
        
    }
    else if(fieldChange==="key-field"){
        if(plainText==="" && cipherText===""){
            return [plainText,key,cipherText]
        }
        else if(cipherText===""){
            let value=HillCipherEnc(plainText,key)
            return [plainText,key,value]
        }
        else if(plainText===""){

        }
        else{
            let value=HillCipherEnc(plainText,key)
            return [plainText,key,value]
        }
    }
    else if(fieldChange==="cipher-field"){
        if(plainText==="" && cipherText===""){
            return [plainText,key,cipherText]
        }
        else if(plainText===""){
            let value=HillCipherDec(cipherText,key)
            return [value,key,cipherText]
        }
        else if(cipherText===""){
            let value=HillCipherDec(cipherText,key)
            return [value,key,cipherText]
        }
        else{
            let value=HillCipherDec(cipherText,key)
            return [value,key,cipherText]
        }
    }
}


export default CarryHillCipherOperation;