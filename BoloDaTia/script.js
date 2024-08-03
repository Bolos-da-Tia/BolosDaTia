//----------------------Validação USERNAME---------------//
let form = document.getElementById('form');
let usernameInput = document.getElementById('username');
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById('username-helper');


//---------------------Mostrar Popup campo obrigatório---//

usernameInput.addEventListener("focus", () => {
    usernameLabel.classList.add("required-popup")
})

//---------------------Oculta Popup campo obrigatório---//
usernameInput.addEventListener("blur", () => {
    usernameLabel.classList.remove("required-popup")
})

//---------------------Validar valor do input----------//
usernameInput.addEventListener("change", function(e){
    let valorUsername = e.target.value
    if(valorUsername.length < 4){
        console.log("O Username precisa ter 4 ou mais caracteres")
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.innerText = "O Username precisa ter 4 ou mais caracteres"
        usernameHelper.classList.add("visible")
    }else{
        console.log("Username válido")
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
})


//----------------------Validação USERNAME---------------//