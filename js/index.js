const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

// Vlidação

form.addEventListener("submit", (event) => {

    event.preventDefault();

    // Verifica se o nome esta vazio
    if(nameInput.value === ""){
        alert("Por favor, digite seu nome")
        return;
    }

    // Verificar se email esta preenchido e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, digite seu Email")
        return;
    }

    // verificar a senha
    if(!validatePassword(passwordInput.value)) {

        alert("Senha precisa de no minimo 8 digitos")
        return;

    }
    
    // Verificar a situação se foi selecionada
    if(jobSelect.value === "") {

        alert("Por favor, selecione a sua situação")
        return;
    }

    // Verificar a mensagem
    if(messageTextarea.value === ""){

        alert("Por favor, escreva uma mensagem")
        return;
    }

    // se todos os campos etiverem preenchido envie o form
    form.submit();
})

// Função que valida email
function isEmailValid(email) {
    // criar um Regex 
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

// Funçao valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
          //  senha valida
        return true
    }
        // senha invalida
        return false;
      
}