export default function verificaFormCadastro(){

}

const formulario = document.forms[1]
const senha1 = formulario.elements[3]
const senha2 = formulario.elements[4]
const span = document.querySelector('.senha-verificada')


setInterval(() => {
    if(senha1.value !== senha2.value){
        span.innerHTML = 'confirme sua senha corretamente'
        senha2.classList.add('confirmar')
    } else {
        span.innerHTML = ''
        senha2.classList.remove('confirmar')
    }
},2000);



