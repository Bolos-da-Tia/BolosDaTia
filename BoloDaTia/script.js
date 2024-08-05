//----------------------Validação USUÁRIO, EMAIL (O Que?)---------------//
let form = document.getElementById('form');
let usernameInput = document.getElementById('username');
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById('username-helper');
let emailInput = document.getElementById('email');
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById('email-helper');
let senhaInput = document.getElementById('senha');
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById('senha-helper');
let confirmasenhaInput = document.getElementById('confirma-senha');
let confirmasenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmasenhaHelper = document.getElementById('confirma-senha-helper');


//---------------------Mostrar/ocultar Popup de campo obrigatório---//
function mostrarPopup(input, label){

    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    });
    
    input.addEventListener("blur", () => {
    label.classList.remove("required-popup")
    });
};

mostrarPopup(usernameInput, usernameLabel);
mostrarPopup(emailInput, emailLabel);
mostrarPopup(senhaInput, senhaLabel);
mostrarPopup(confirmasenhaInput, confirmasenhaLabel);

//---------------------Validar valor do input----------//
usernameInput.addEventListener("change", function(e){
    let valorUsername = e.target.value
    if(valorUsername.length < 5){
        console.log("O Username precisa ter 5 ou mais caracteres")
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.innerText = "O Username precisa ter 5 ou mais caracteres"
        usernameHelper.classList.add("visible")
    }else{
        console.log("Username válido")
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
});

emailInput.addEventListener("change", function(e){
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        console.log("Email válido")
        emailInput.classList.remove("error")
        emailInput.classList.add("correct")
        emailHelper.classList.remove("visible")
    }else{
        console.log("Email incluir um @ e .com")
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.innerText = "Email precisa incluir um @ e .com"
        emailHelper.classList.add("visible")
    }
});


senhaInput.addEventListener("change", function(e){
    let valorSenha = e.target.value
    if(valorSenha.length < 4){
        senhaInput.classList.remove("correct")
        senhaInput.classList.add("error")
        senhaHelper.innerText = "A senha precisa ter 4 ou mais caracteres"
        senhaHelper.classList.add("visible")
    }else{
        console.log(valorSenha)
        senhaInput.classList.remove("error")
        senhaInput.classList.add("correct")
        senhaHelper.classList.remove("visible")
    }
});


confirmasenhaInput.addEventListener("change", function(e){
    let capturaConfirmaSenha = e.target.value
    if (capturaConfirmaSenha.length < 4){
        confirmasenhaInput.classList.remove("correct")
        confirmasenhaInput.classList.add("error")
        confirmasenhaHelper.innerText = "A senha precisa ter 4 ou mais caracteres"
        confirmasenhaHelper.classList.add("visible")
    } else {
        confirmasenhaInput.classList.remove("error")
        confirmasenhaInput.classList.add("correct")
        confirmasenhaHelper.innerText = "Senha válida"
        confirmasenhaHelper.classList.remove("visible")
    }
});

