const passwordOutput = document.getElementById("password-output")
const dataLetters = "azertyuiopqsdfghjklmwxcvbn".split('');
const dataNumbers = "0123456789".split('');

function generatePassword() {
    const data = [].concat(
        letters.checked ? dataLetters : [],
        numbers.checked ? dataNumbers : [],



    )
    let passwordLength = parseInt(document.getElementById('password-cursor').value);
    let newPassword = '';

    for (let i = 0; i < passwordLength; i += 1) {
        newPassword += data[Math.floor(Math.random() * data.length)]
    };
    passwordOutput.value = newPassword

}
