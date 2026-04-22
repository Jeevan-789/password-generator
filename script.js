const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("length-value");

const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

lengthEl.addEventListener("input", () => {
    lengthValue.innerText = lengthEl.value;
});

function generatePassword() {
    let chars = "";

    if (upperEl.checked) chars += upperChars;
    if (lowerEl.checked) chars += lowerChars;
    if (numberEl.checked) chars += numberChars;
    if (symbolEl.checked) chars += symbolChars;

    if (chars === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < lengthEl.value; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    passwordEl.value = password;
}

function copyPassword() {
    passwordEl.select();
    document.execCommand("copy");
    alert("Password copied!");
}
