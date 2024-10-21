class PolyCipher {
  constructor(m1, m2, m3) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.m1 = m1;
    this.m2 = m2;
    this.m3 = m3;
  }

  encode(plainText) {
    let cipherText = "";
    for (let i = 0; i < plainText.length; i++) {
      const index = this.alphabet.indexOf(plainText[i]);
      if (index !== -1) {
        if (i % 3 == 0) {
          cipherText += this.m1[index];
        } else if (i % 3 == 1) {
          cipherText += this.m2[index];
        } else if (i % 3 == 2) {
          cipherText += this.m3[index];
        }
      }
    }

    return cipherText;
  }
  decode(cipherText) {
    let plainText = "";
    for (let i = 0; i < cipherText.length; i++) {
      if (i % 3 == 0) {
        const index = this.m1.indexOf(cipherText[i]);
        plainText += this.alphabet[index];
      } else if (i % 3 == 1) {
        const index = this.m2.indexOf(cipherText[i]);
        plainText += this.alphabet[index];
      } else if (i % 3 == 2) {
        const index = this.m3.indexOf(cipherText[i]);
        plainText += this.alphabet[index];
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
 
  const m1 = "ASDFGHJKLPOIUYTREWQZXCVBNM";
  const m2 = "QAZWSXEDCRFVTGBYHNUPJMIKOL";
  const m3 = "ZXCVBNMKIOPLUJHYTGFREDSWQA";
  const cipher = new PolyCipher(m1,m2,m3);
  if (selectType == "Encode") {
    const result = cipher.encode(inputValue);
    document.getElementById("result").value = result;
  } else if (selectType == "Decode") {
    const result = cipher.decode(inputValue);
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
  value = value.replace(/[^a-zA-Z]/g, "");
  e.target.value = value.toUpperCase();
}

onSelect("Encode");
