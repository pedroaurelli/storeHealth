export default function verificaFormCadastro(){

}



function verificarSenha(){

    //campos obrigatórios

        const formularioData = document.querySelectorAll('[data-cadastro="cadastro"]')
        const arrayFormulario = new Array(formularioData)
        const span = document.querySelector('.verificacao')

        

        arrayFormulario[0].forEach((item)=>{

            if(item.value == ''){
                item.classList.add('email-invalido')
                span.innerHTML = 'campos obrigatórios *'

            } else {
                item.classList.remove('email-invalido')
                span.innerHTML = ''
                
            }

                
        })

        // verificação de email

        const input = document.forms[1].elements[2]
        const inputEmail = document.forms[1].elements[2].value
        const arrayEmail = new Array(inputEmail)
            
        
        if(!arrayEmail[0].includes('@' && '.com')){
            input.classList.add('email-invalido')
            span.innerHTML += '<br>formato de email inválido'
        } else {
            input.classList.remove('email-invalido')
        }

        //verificação de senha

        if((formularioData[3].value !== formularioData[4].value) || (formularioData[3].value == '')){
            formularioData[4].classList.add('email-invalido')
            span.innerHTML += '<br>confirme a senha corretamente'
        }

        //verificação dos termos

        const btnTermos = document.querySelector('.termos')

        if(!btnTermos.checked){
            span.innerHTML += '<br>concorde com os termos de uso *'
        }

       

        


        modal()

        function modal(){
            const modal = document.querySelector('.modal')
            const cardModal = document.querySelector('.card-modal')
            const spanNome = document.querySelector('[data-modal="nome"]')
            const spanUsuario = document.querySelector('[data-modal="usuario"]')
            const spanEmail = document.querySelector('[data-modal="email"]')
            const btnModal = document.querySelector('.btnModal')

            const inputNomeUsuario = document.querySelector('.input-nome-cadastro')
            const inputUsuario = document.querySelector('.input-usuario-cadastro')




            if((span.innerHTML == '') && (!inputNomeUsuario.classList.contains('email-invalido')) && (!inputUsuario.classList.contains('email-invalido'))){
                modal.classList.add('concluido')
                cardModal.classList.add('animacaoConcluido')

                spanNome.innerHTML = document.forms[1].elements[0].value
                spanUsuario.innerHTML = document.forms[1].elements[1].value
                spanEmail.innerHTML = document.forms[1].elements[2].value

                function fecharModal(){
                    modal.classList.remove('concluido')
                    cardModal.classList.remove('animacaoConcluido')
                }

                btnModal.addEventListener('click', fecharModal)
                modal.addEventListener('click', (item)=>{
                    if(item.target == modal){
                        modal.classList.remove('concluido')
                        cardModal.classList.remove('animacaoConcluido')
                    }
                })
                
            }
        }


        






} 





const btnCadastro = document.querySelector('.btnCadastro')
btnCadastro.addEventListener('click' , verificarSenha)








