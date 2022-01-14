export default function teste(){
    
}


function verificarSenha(){

    //campos obrigatórios

        const formularioData = document.querySelectorAll('[data-cadastro="cadastro"]')
        const span = document.querySelector('.verificacao')
        const inputEmail = document.querySelector('.inputEmailCadastro')

        formularioData.forEach((item, index)=>{
            if(item.value == ''){
                span.innerHTML = 'campos obrigatórios *'
                item.classList.add('email-invalido')
            } else {
                span.innerHTML = ''
                item.classList.remove('email-invalido')
            }


            if(index == 2){
                const inputEmail = item
                const spanEmail = document.querySelector('.valida-email')
                if(!inputEmail.value.includes('@' && '.com')){
                    item.classList.add('email-invalido')
                    spanEmail.innerHTML = 'formato de email inválido'
                } else {
                    spanEmail.innerHTML = ''
                }
            }
        })



        // modal()

        // function modal(){
        //     const modal = document.querySelector('.modal')
        //     const cardModal = document.querySelector('.card-modal')
        //     const spanNome = document.querySelector('[data-modal="nome"]')
        //     const spanUsuario = document.querySelector('[data-modal="usuario"]')
        //     const spanEmail = document.querySelector('[data-modal="email"]')
        //     const btnModal = document.querySelector('.btnModal')



        //     if((span.innerHTML == '')){
        //         modal.classList.add('concluido')
        //         cardModal.classList.add('animacaoConcluido')

        //         spanNome.innerHTML = document.forms[1].elements[0].value
        //         spanUsuario.innerHTML = document.forms[1].elements[1].value
        //         spanEmail.innerHTML = document.forms[1].elements[2].value

        //         function fecharModal(){
        //             modal.classList.remove('concluido')
        //             cardModal.classList.remove('animacaoConcluido')
        //         }

        //         btnModal.addEventListener('click', fecharModal)
        //         modal.addEventListener('click', (item)=>{
        //             if(item.target == modal){
        //                 modal.classList.remove('concluido')
        //                 cardModal.classList.remove('animacaoConcluido')
        //             }
        //         })
                
        //     }
        // }


        






} 





const btnCadastro = document.querySelector('.btnCadastro')
btnCadastro.addEventListener('click' , verificarSenha)








