var botaoRemover = document.querySelector('.opcoesDoCartao-remove')

botaoRemover.addEventListener('click', function(){

    var cartao = this.parentNode.parentNode

    cartao.classList.add('cartao--some')

    cartao.addEventListener('transitionend', removeCartao)

})

function removeCartao(){
    this.remove()
}