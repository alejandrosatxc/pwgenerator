const btn = document.querySelector("#generate-btn")

const generatePassword = (length) => {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
    for(var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

const myfunc = () => {
    const password = generatePassword(8)
    console.log(password)
    const pwtextfield = document.querySelector('#pwresult')
    pwtextfield.innerHTML = password
}

btn.addEventListener('click', myfunc)
