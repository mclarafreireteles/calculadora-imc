function trocar(){
    let imagem = document.querySelector('.right-container img');
    let texto = document.querySelector('.resultado');

   if (imagem.style.display !== 'none') {
       imagem.style.opacity = '0';
       imagem.style.display = 'none';
       texto.style.display = 'flex';
       texto.style.opacity = '1';
   }
}