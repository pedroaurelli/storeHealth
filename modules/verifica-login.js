export default function verificaLogin(){

}

const inputLogin = document.querySelector('.input-login')
const inputSenha = document.querySelector('#input-senha')
const btnLogin = document.querySelector('#btn-entrar')

function fakeLogin(){
    if ((inputLogin.value == 'pedro') && (inputSenha.value == 'pedro')){


        window.open('https://github.com/pedroaurelli')


    } else if((!inputLogin.value == '') && (!inputSenha.value == '')){
        console.log('teste')
    } 
}

btnLogin.addEventListener('click', fakeLogin)
