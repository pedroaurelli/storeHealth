export default function verificaCadastro(){
    
}

const btnAbrirCadastro = document.querySelector('#botaoCadastro')
const containerCadastro = document.querySelector('.container-window-cadastro')


function abrirCadastro(){
    containerCadastro.classList.toggle('abrirCadastro')
}

btnAbrirCadastro.addEventListener('click', abrirCadastro)


const btnVoltarCadastro = document.querySelector('.botaoVoltar')

function fecharCadastro(){
    containerCadastro.classList.toggle('abrirCadastro')
    containerCadastro.classList.add('fecharCadastro')

    setTimeout(()=>{
        containerCadastro.classList.remove('fecharCadastro', 'abrirCadastro')
    },1000)
}

btnVoltarCadastro.addEventListener('click', fecharCadastro)

