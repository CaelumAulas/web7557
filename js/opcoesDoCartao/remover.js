;(function(){

    const listaDeBotoes = document.querySelectorAll('.opcoesDoCartao-remove')

    for (let contador = 0; contador < listaDeBotoes.length; contador++) {
        
        listaDeBotoes[contador].addEventListener('click', function () {
            
            let cartao = this.parentNode.parentNode
            cartao.classList.add('cartao--some')
            cartao.addEventListener('transitionend', removeCartao)

            console.log(event);
            
        })
    }

    function removeCartao() {
        this.remove()
    }

})()