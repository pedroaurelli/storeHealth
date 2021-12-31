//function esqueci a senha

const btnEsqueciSenha = document.querySelector('.link-esqueci-senha')
const containerSenha = document.querySelector('.container-esqueci-senha-PAI')

function abrirEsqueciSenha(){
    containerSenha.classList.toggle('abrir')
    console.log(containerSenha.getBoundingClientRect(top))
}
btnEsqueciSenha.addEventListener('click', abrirEsqueciSenha)


const btnVoltarEsqcSenha = document.querySelector('.botaoVoltarRecuperarSenha')

function fecharEsqueciSenha(){
    
    containerSenha.classList.toggle('abrir')
    containerSenha.classList.add('fechar')

    setTimeout(function(){
        containerSenha.classList.remove('fechar', 'abrir')
    },1000)
}

btnVoltarEsqcSenha.addEventListener('click', fecharEsqueciSenha )


















//function verificação email válido

const spanNaoValido = document.querySelector('.emailNaoValido')
const botaoAlert = document.querySelector('.botao-alert')

function initAlert(){
    const textoInput = document.forms[1].elements[0].value
    const textoInputArray = new Array(textoInput)

    if(textoInputArray[0].includes('@')){
        spanNaoValido.innerHTML = `email enviado!`
        spanNaoValido.classList.add('valido')
    } else {
        spanNaoValido.innerHTML = `o email '${document.forms[1].elements[0].value}' NÃO é válido`
        spanNaoValido.classList.remove('valido')
    }
    
}


botaoAlert.addEventListener('click', initAlert)