# store.Health
O projeto store.Health surgiu a partir da minha necessidade em aprimorar meus conhecimentos em Javascript.
store.Health é uma loja ficticia, meu objetivo era fazer a parte de login, cadastro e recuperar senha em uma unica página, e fazer uma simples validação no cadastro.
> projeto prototipado 100% por mim no Figma

## O que eu usei?
- manipulação de arrays e strings
- animação dos elementos no DOM
- validação do cadastro com condicionais
- dividir o código em modules para melhor manutenção 
- set timout em alguns botoes para melhor experiencia do usuario

## Login
> - página inicial
> - página apenas por estética, não possui funcionalidade de logar

>![imagem_2022-01-14_132801](https://user-images.githubusercontent.com/88735972/149550266-1f4e4590-f69c-4f36-877b-8818ffc55681.png)

## Recuperar Senha
>- animação opacity 0 to 1 e transform translate
>- verificação simples no input.value do email
>- se input.value incluir '@' e '.com', enviar email

>![cut-recuperar-senha](https://user-images.githubusercontent.com/88735972/149559290-da96b32d-a556-4e65-84f7-3b16f240ae26.gif)

## Cadastro
> - com certeza a parte mais complexa do projeto
> - nessa parte aprendi muito sobre manipulação de array, strings, loops e condicionais
> - criei um span para manipular o texto conforme as codições
> - se todos os campos estiverem vázios, o span receberá o valor campos obrigatórios, e a borda dos inputs trocará de cor 
> - o confirmar senha tem que ser igual a senha inserida
> - para o formato de email, usei a mesma validação que fiz no 'recuperar senha'
> - caso os valores do input estiverem preenchidos, email válido, senha confirmada corretamente e ipunt checkbox 'concordo com os termos' = true. aparecerá um pop-up modal com as informações passadas durante o cadastro!

![cut-cadastro](https://user-images.githubusercontent.com/88735972/149560163-fc37dab5-fec8-4d87-a6f3-8e377ef44daf.gif)


## Conclusão do projeto
#### até agora (14/01/2022, data de publicação desse projeto no github) foi o projeto mais complexo que ja desenvolvi, aprendi muito com ele. Poderia consumir uma API de cadastro porém como estou praticando bastante Javascript para ter uma base sólida para começar a estudar um Framework, desenvolver o cadastro assim, do 0 foi muito bom para aperfeiçoar minha lógica e meus conhecimentos em tal linguagem! Espero que tenham gostado e se possivél deixe um 'Star ⭐' no projeto para me ajudar! Obrigado!
