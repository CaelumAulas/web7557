;(function(){
    const listaDeCartoes = document.querySelectorAll('.cartao')

    for(let i = 0; i < listaDeCartoes.length; i++ ){

        let cartao = listaDeCartoes[i]

        cartao.addEventListener('focusin', function(){
            this.classList.add('cartao--focado')
        })

        cartao.addEventListener('focusout', function(){
            this.classList.remove('cartao--focado')
        })

        cartao.addEventListener('change', function(evento){
            //Mudar o background do cartão para o value do input radio clicado
            this.style.backgroundColor = evento.target.value
        })
    }
})()











