class VignereCipher {
  CreateKey(plainText, key) {
    key = key.split("");
    if (key.length == plainText.length) {
      return key.join("");
    } else if (key.length > plainText.length) {
      return key.slice(0, plainText.length).join("");
    } else {
      let keyLength = key.length;
      for (let i = 0; i < plainText.length - keyLength; i++) {
        key.push(key[i % key.length]);
      }
      return key.join("");
    }
  }

  encode(plainText, key) {
    let cipherText = "";
    for (let i = 0; i < plainText.length; i++) {
      let ascii = (plainText[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
      ascii += "A".charCodeAt(0);
      cipherText += String.fromCharCode(ascii);
    }

    return cipherText;
  }
  decode(cipherText,key){
    let plainText = ""
    for(let i = 0;i<cipherText.length;i++){
        let ascii = (cipherText[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26
        ascii+='A'.charCodeAt(0)
        plainText+=String.fromCharCode(ascii)
    }
    return plainText
  }
}

let selectType;

function onSelect(type) {
  document.getElementById("button").innerHTML = type;
  selectType = type;
  if (type == "Encode") {
    document.getElementById("label").innerHTML = "Plain Text";
    document.getElementById("h-enc").style.color = "#f90";
    document.getElementById("h-dec").style.color = "black";
    document.getElementById("res-label").innerHTML = "Cipher Text";
  } else if (type == "Decode") {
    document.getElementById("label").innerHTML = "Cipher Text";
    document.getElementById("h-enc").style.color = "black";
    document.getElementById("h-dec").style.color = "#f90";
    document.getElementById("res-label").innerHTML = "Plain Text";
  }

  document.getElementById("input").value = "";
  document.getElementById("result").value = "";
}

function EndCoding(inputValue) {
  const cipher = new VignereCipher();
  const key = 'SECRETKEY'
  const updatedKey = cipher.CreateKey(inputValue,key)
  if (selectType == "Encode") {
    const result = cipher.encode(inputValue,updatedKey);
    document.getElementById("result").value = result;
  } else if (selectType == "Decode") {
    const result = cipher.decode(inputValue,updatedKey);
    document.getElementById("result").value = result;
  }
}

function onSubmit() {
  const inputValue = document.getElementById("input").value;
  if (inputValue !== "") {
    EndCoding(inputValue);
  } else {
    alert(
      `Please enter ${selectType == "Encode" ? "Plain Text" : "Cipher Text"}`
    );
  }
}

function OnChange(e) {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z]/g, ''); 
    e.target.value = value.toUpperCase();
}


onSelect("Encode");

