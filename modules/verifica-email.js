export default function verificaEmail(){

}

const spanNaoValido = document.querySelector('.emailNaoValido')
const botaoAlert = document.querySelector('.botao-alert')

function initAlert(){
    const input = document.forms[2].elements[0]
    const textoInput = document.forms[2].elements[0].value
    const textoInputArray = new Array(textoInput)

    if(textoInputArray[0].includes('@') && textoInputArray[0].includes('.com') ){
        
        spanNaoValido.innerHTML = `email enviado! verifique a caixa de spam`
        spanNaoValido.classList.add('valido')
        input.classList.remove('email-invalido')
    } else {
        spanNaoValido.innerHTML = `o email '${document.forms[2].elements[0].value}' NÃO é válido`
        spanNaoValido.classList.remove('valido')
        input.classList.add('email-invalido')
    }
    
}



botaoAlert.addEventListener('click', initAlert)
