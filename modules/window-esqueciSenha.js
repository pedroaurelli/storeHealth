export default function esqueciSenha(){

}

const btnEsqueciSenha = document.querySelector('.link-esqueci-senha')
const containerSenha = document.querySelector('.container-esqueci-senha-PAI')

function abrirEsqueciSenha(){
    containerSenha.classList.toggle('abrir')
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