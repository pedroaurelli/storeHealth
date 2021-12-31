const botaoCadastro = document.querySelector('#botaoCadastro')
const botaoVoltar = document.querySelector('.botaoVoltar')
const botaoVoltarRS = document.querySelector('.botaoVoltarRecuperarSenha')
const botaoEsqueciSenha = document.querySelector('.link-esqueci-senha')

const containerCadastro = document.querySelector('.container-window-cadastro')
const containerLogin = document.querySelector('.container-window-login')
const containerRS = document.querySelector('.container-esqueci-senha-PAI')


//animar botoes cadastro

function animarCadastro(){
    containerCadastro.classList.remove('voltar')
    containerCadastro.classList.add('absolute')
    containerRS.classList.remove('esqueci-senha')
    containerRS.classList.remove('voltar-esqueci-senha')
}
botaoCadastro.addEventListener('click', animarCadastro)

function animarVoltar(){
    containerCadastro.classList.add('voltar')
}
botaoVoltar.addEventListener('click', animarVoltar)


//animar botoes esqueci a senha

function entrarEsqueciSenha(){
    containerRS.classList.add('esqueci-senha')
    containerRS.classList.remove('voltar-esqueci-senha')
    containerCadastro.classList.remove('voltar')
    containerCadastro.classList.remove('absolute')
}
botaoEsqueciSenha.addEventListener('click', entrarEsqueciSenha)


function voltarEsqueciSenha(){
    containerRS.classList.add('voltar-esqueci-senha')
    
}
botaoVoltarRS.addEventListener('click', voltarEsqueciSenha)

