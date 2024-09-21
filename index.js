class CesarCipher {
  encode(plainText) {
    let cipherText = "";
    for (const char of plainText) {
      const charCode = char.charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        let shiftedChar = charCode + 3;
        if (shiftedChar > 90) {
          shiftedChar = shiftedChar - 26;
        }

        cipherText += String.fromCharCode(shiftedChar);
      } else if (charCode >= 97 && charCode <= 122) {
        let shiftedChar = charCode + 3;
        if (shiftedChar > 122) {
          shiftedChar = shiftedChar - 26;
        }

        cipherText += String.fromCharCode(shiftedChar);
      } 
      else if(charCode>=48 && charCode<=57){
        let shiftedChar = charCode + 3
        if(shiftedChar > 57){
            shiftedChar = shiftedChar - 10
        }

        cipherText += String.fromCharCode(shiftedChar);
      }
      else {
        cipherText += char;
      }
    }

    return cipherText;
  }

  decode(cipherText) {
    let plainText = "";
    for (const char of cipherText) {
      const charCode = char.charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        let shiftedChar = charCode - 3;
        if (shiftedChar < 65) {
          shiftedChar = shiftedChar + 26;
        }

        plainText += String.fromCharCode(shiftedChar);
      } else if (charCode >= 97 && charCode <= 122) {
        let shiftedChar = charCode - 3;
        if (shiftedChar < 97) {
          shiftedChar = shiftedChar + 26;
        }

        plainText += String.fromCharCode(shiftedChar);
      } 
      else if(charCode>=48 && charCode<=57){
        let shiftedChar = charCode - 3
        if(shiftedChar < 48){
            shiftedChar = shiftedChar + 10
        }

        plainText += String.fromCharCode(shiftedChar);
      }
      else {
        plainText += char;
      }
    }

    return plainText;
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
    document.getElementById("res-label").innerHTML = "Cypher Text";
  } else if (type == "Decode") {
    document.getElementById("label").innerHTML = "Cypher Text";
    document.getElementById("h-enc").style.color = "black";
    document.getElementById("h-dec").style.color = "#f90";
    document.getElementById("res-label").innerHTML = "Plain Text";
  }

  document.getElementById("input").value = "";
  document.getElementById("result").value = "";
}

function EndCoding(inputValue) {
  const cypher = new CesarCipher();

  if (selectType == "Encode") {
    const result = cypher.encode(inputValue);
    document.getElementById("result").value = result;
  } else if (selectType == "Decode") {
    const result = cypher.decode(inputValue);
    document.getElementById("result").value = result;
  }
}

function onSubmit() {
  const inputValue = document.getElementById("input").value;
  if (inputValue !== "") {
    EndCoding(inputValue);
  } else {
    alert(
      `Please enter ${selectType == "Encode" ? "Plain Text" : "Cypher Text"}`
    );
  }
}

onSelect("Encode");
