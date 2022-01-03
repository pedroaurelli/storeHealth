export default function verificaEmail(){

}

const spanNaoValido = document.querySelector('.emailNaoValido')
const botaoAlert = document.querySelector('.botao-alert')

function initAlert(){
    const textoInput = document.forms[2].elements[0].value
    const textoInputArray = new Array(textoInput)

    if(textoInputArray[0].includes('@')){
        spanNaoValido.innerHTML = `email enviado! verifique a caixa de spam`
        spanNaoValido.classList.add('valido')
    } else {
        spanNaoValido.innerHTML = `o email '${document.forms[2].elements[0].value}' NÃO é válido`
        spanNaoValido.classList.remove('valido')
    }
    
}

const a = ()=>{
    console.log('ola')
}

a();



botaoAlert.addEventListener('click', initAlert)

console.log(document.forms[0].elements[0])