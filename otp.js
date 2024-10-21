class OTP {
    constructor() {
        this.key = ""; // Store the generated key
    }

    // Generate a random key of the same length as the plain text (including spaces)
    GenerateKey(plainText) {
        let generatedKey = ""; // Initialize empty key

        for (const char of plainText) {
            if (char === " ") {
                generatedKey += " "; 
            } else {
                const randomChar = Math.floor(Math.random() * 95) + 32; 
                generatedKey += String.fromCharCode(randomChar) 
            }
        }

        this.key = generatedKey; 
        return generatedKey; 
    }

    
    Encrypt(plainText) {
        let encryptedText = ""; 

    
        for (let i = 0; i < plainText.length; i++) {
            if (plainText[i] === " ") {
                encryptedText += " "; 
            } else {
                let textCharCode = plainText.charCodeAt(i); 
                let keyCharCode = this.key.charCodeAt(i); 
                let encryptedChar = textCharCode ^ keyCharCode; 
                encryptedText += String.fromCharCode(encryptedChar); 
            }
        }

        return encryptedText; 
    }

   
    Decrypt(encryptedText) {
        let decryptedText = ""; 

        for (let i = 0; i < encryptedText.length; i++) {
            if (encryptedText[i] === " ") {
                decryptedText += " "; 
            } else {
                let encryptedCharCode = encryptedText.charCodeAt(i); 
                let keyCharCode = this.key.charCodeAt(i); 
                let decryptedChar = encryptedCharCode ^ keyCharCode; 
                decryptedText += String.fromCharCode(decryptedChar); 
            }
        }

        return decryptedText; 
    }

}

let selectType;
let otp = new OTP();

function onSelect(type) {
  document.getElementById("button").innerHTML = type;
  selectType = type;
  if (type === "Encode") {
    document.getElementById("label").innerHTML = "Plain Text";
    document.getElementById("h-enc").style.color = "#f90";
    document.getElementById("h-dec").style.color = "black";
    document.getElementById("res-label").innerHTML = "Cipher Text";
    otp.key = ""; 
  } else if (type === "Decode") {
    document.getElementById("label").innerHTML = "Cipher Text";
    document.getElementById("h-enc").style.color = "black";
    document.getElementById("h-dec").style.color = "#f90";
    document.getElementById("res-label").innerHTML = "Plain Text";
  }

  document.getElementById("input").value = "";
  document.getElementById("result").value = "";
}

function EndCoding(inputValue) {
  if (selectType === "Encode") {
    otp.GenerateKey(inputValue); 
    const result = otp.Encrypt(inputValue); 
    document.getElementById("result").value = result;
  } else if (selectType === "Decode") {
    const result = otp.Decrypt(inputValue); 
    document.getElementById("result").value = result; 
  }
}

function onSubmit() {
  const inputValue = document.getElementById("input").value;
  if (inputValue !== "") {
    EndCoding(inputValue); 
  } else {
    alert(`Please enter ${selectType === "Encode" ? "Plain Text" : "Cipher Text"}`);
  }
}


onSelect("Encode");
