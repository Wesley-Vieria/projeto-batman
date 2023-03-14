/*
      OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
      - passo 1 - dar um jeito de pegar o elemento HTML dos botões
      - passo 2 - dar um jeito de identificar o clique do usuário no botão
      - passo 3 - desmarcar o botão selecionado anterior
      - passo 4 - marcar o botão clicado como se estivesse selecionada
      - passo 5 - esconder a imagem anterior
      - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
  */
 // - passo 1 - dar um jeito de pegar o elemento HTML dos botões
 const botoesCarrossel = document.querySelectorAll('.botao');    
 const imagens = document.querySelectorAll('.imagem')
 // - passo 2 - dar um jeito de identificar o clique do usuário no botão
 botoesCarrossel.forEach((botao, indice) => {
   botao.addEventListener('click', ()  => {
     desativarBotaoAtivo();
 
     selecionarBotaoCarrosel(botao);
 
     esconderImagemSelecionado();
 
     mostrarImagemSelecionado(indice);
   })
 })
  
 function selecionarBotaoCarrosel(botao) {
   botao.classList.add('ativo');
 }
 
 function mostrarImagemSelecionado(indice) {
   imagens[indice].classList.add('selecionado');
 }
 
 function esconderImagemSelecionado() {
   const imagemAtiva = document.querySelector('.selecionado');
   imagemAtiva.classList.remove('selecionado');
 }
 
 function desativarBotaoAtivo() {
   const botaoSelecionado = document.querySelector('.ativo');
   botaoSelecionado.classList.remove('ativo');
 }
 