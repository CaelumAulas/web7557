;(function(){

    console.log('adaad');
    
    const botao = document.querySelector('#btnMudaLayout')
    const mural = document.querySelector('.mural')
    
    function mudaTexto() {
    
        if (botao.textContent == 'Linhas') {
            botao.textContent = 'Blocos'
        } else {
            botao.textContent = 'Linhas'
        }
    }
    
    function mudaLayout() {
        mural.classList.toggle('mural--linha')
    }
    
    botao.addEventListener('click', mudaTexto)
    
    botao.addEventListener('click', mudaLayout)
    
    botao.classList.remove('no-js')
})()