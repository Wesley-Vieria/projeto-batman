const botoesCarrossel = document.querySelectorAll('.botao');    
 const imagens = document.querySelectorAll('.imagem')

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
 