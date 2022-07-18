import ceaser_cipher from '../../assets/Technique Desc/ceaser_cipher.png';
import vigenere_cipher from '../../assets/Technique Desc/vigenere_cipher.png';
import hill_cipher_1 from '../../assets/Technique Desc/hill_cipher_1.png'
import hill_cipher_2 from '../../assets/Technique Desc/hill_cipher_2.png'

import playfair_cipher_1 from '../../assets/Technique Desc/playfair_cipher_1.png'

const Ciphers=[
    {
        heading:"Ceaser Cipher",
        description:<>
            <ul >
                <li style={{fontSize:"18px"}}>It is also called Additive Cipher.</li>
                <li style={{fontSize:"18px"}}>Each letter in the plain-text is replaced by a letter corresponding to a number of shifts in the alphabet.</li>
                <li style={{fontSize:"18px"}}>It is a mono-alphabetic cipher.</li>
                <li style={{fontSize:"18px"}}>It is one of the earliest and simplest method of encryption techniques.</li>
            </ul>
        </>,
        examplePlainText:"Harshit",
        exampleKey:"2",
        exampleCipherText:"Jctujkv",
        solution:<><img src={ceaser_cipher} width="95%" height="600px" alt="" /></>
    },
    {
        heading:"Playfair Cipher",
        description:<>
            <ul>
                <li>"It was invnted in 1854 by charles wheatstone,but was named after lord playfair, who promoted the use of cipher"</li>
                <li>ALGORITHM</li>
                <ul>
                    <li>Create 5x5 matrix that is called grid of letters</li>
                    <li>The matrix is made by inserting the value of key and remaining alphabet into the matrix (row wise from left to right) where, letter
                     I and J will be combined.</li>
                    <li>Conver the text into pairs of alphabet, for ex: Heya : He   ya</li>
                    <ul>
                        <li>Pairs cannot be mad with same letters,Break the letters into single and add 'X' to the previous</li>

                        <li>If the letter is steading alone in the proccess of pairing then add 'Z' with the letters</li>
                    </ul>

                    <li>Code will be formed using 3 rules</li>
                    <ul>
                        <li>If both the alphabets are in the same row, replace them with alphabet totheir immediate right</li>
                        <li>If both the alphabet are in same column replace them with alphabet immediately below them</li>
                        <li>If not in the same row and column, replace them with the alphabets in the same row respectively, but at other pair of corners</li>
                    </ul>

                </ul>
            </ul>
        </>,
        examplePlainText:"",
        exampleKey:"",
        exampleCipherText:"",
        solution:<>
            <img src={playfair_cipher_1} alt=""/>
        </>
    },
    {
        heading:"Hill Cipher",
        description:<>
            <ul >
                <li style={{fontSize:"18px"}}>Developed by Lester Hill in 1969</li>
                <li style={{fontSize:"18px"}}>Encrypts a group of letters called poly-graph.</li>
                <li style={{fontSize:"18px"}}>This method uses concepts of mathematics such as matrix multiplication, adjoint of a matrix , inverse of a matrix.</li>
                <li style={{fontSize:"18px"}}>Key length is always smaller or equal to the Plain text length.</li>
            </ul>
        </>,
        examplePlainText:"attack",
        exampleKey:"cddg",
        exampleCipherText:"fkmfio",
        solution:<>
            <img src={hill_cipher_1} alt="" />
            <img src={hill_cipher_2} alt="" />

        </>
    },
    {
        heading:"Vigenere Cipher",
        description:<>
            <ul >
                <li style={{fontSize:"18px"}}>Designed by Blaise de Vigenere ( 16th century mathematician)</li>
                <li style={{fontSize:"18px"}}>It is a poly-alphabetic cipher.</li>
                <li style={{fontSize:"18px"}}><a href='https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher' title='Wikipedia' target="_blank" rel="noreferrer" style={{color:'white'}}>Vigenere Table</a> is used for this cipher.</li>
                <li style={{fontSize:"18px"}}>Key length is always smaller or equal to the Plain text length.</li>
            </ul>
        </>,
        examplePlainText:"cyber security is fun",
        exampleKey:"cryptography",
        exampleCipherText:"epztk.yvcjygvp8xl.lln",
        solution:<><img src={vigenere_cipher} width="95%" height="600px" alt="" /></>
    },
    {
        heading:"Vernam Cipher",
        description:<>
            <ul >
                <li style={{fontSize:"18px"}}>This a type of Substitution key cipher</li>
                <li style={{fontSize:"18px"}}>Almost same as Vigenere Cipher but here length og the key is same as length of text.</li>
                <li style={{fontSize:"18px"}}>Vigenere Table is used for this cipher.</li>
                <li style={{fontSize:"18px"}}>This is a type of poly-alphabetic cipher.</li>
            </ul>
        </>,
        examplePlainText:"RAMSWARUPK",
        exampleKey:"RANCHOBABA",
        exampleCipherText:"IAZUDOSUQK",
        solution:<>

        </>
    },
    {
        heading:"Rail Fence Cipher",
        description:"",
        examplePlainText:"",
        exampleKey:"",
        exampleCipherText:""
    },
    {
        heading:"Columnar Transposition",
        description:"",
        examplePlainText:"",
        exampleKey:"",
        exampleCipherText:""
    },
    {
        heading:"Double Transposition",
        description:"",
        examplePlainText:"",
        exampleKey:"",
        exampleCipherText:""
    }
]


export default Ciphers