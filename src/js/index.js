
/* Objetivo - quando clicarmos no botão temos que mostrad a imagem de fundo correspondente.

Passo 1 - dar um jeito de pegar o elemento no html dos botoes

passo 2 - dar um jeito de identificar o clique do usuário no botão

passo 3 - desmarcar o botão selecionado anterior

passo 4 - marcar o botão clicando como se estivesse selecionado.

passo 5 - esconder a imagem de fundo anterior.

passo 6 - fazer aparecer a immagem de fundo correspondente ao botão clicado.
*/ 

// Passo 1 - dar um jeito de pegar o elemento no html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado'); 
        botaoSelecionado.classList.remove('selecionado'); 

        // passo 4 - marcar o botão clicando como se estivesse selecionado.
        botao.classList.add('selecionado');  
        
        // passo 5 - esconder a imagem ativa de fundo.
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa')

        // passo 6 - fazer aparecer a immagem de fundo correspondente ao botão clicado.
        imagens[indice].classList.add('ativa');      
        
    })
  
})

