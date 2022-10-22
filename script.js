const btn = document.querySelector("#generate-btn")

const generatePassword = (length) => {
    //enfore min and max password length between 8-128 characters
    if(length < 8)   length = 8 
    if(length > 128) length = 128

    //check values of options checkboxes
    var upper = document.querySelector('#upper').checked
    var lower = document.querySelector('#lower').checked
    var numbers = document.querySelector('#numbers').checked
    var special = document.querySelector('#special').checked

    var result = ''
    var characters = ''

    //For each option that is checked, include that set of characters as part of the password
    if (upper)   characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lower)   characters += 'abcdefghijklmnopqrstuvwxyz'
    if (numbers) characters += '0123456789'
    if (special) characters += '!@#$%^&*()-_+'

    //Generate random password using characters string built from checkbox options
    for(var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

const createPassword = () => {
    const length = document.querySelector("#length").value
    const password = generatePassword(length)
    console.log(password)
    const pwtextfield = document.querySelector('#pwresult')
    pwtextfield.innerHTML = password
}

btn.addEventListener('click', createPassword)
