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

            let tipoCartao = evento.target.classList.contains('opcoesDoCartao-radioTipo')

            if(tipoCartao){
                //Mudar o background do cartão para o value do input radio clicado
                this.style.backgroundColor = evento.target.value
            }
        })
        
        cartao.addEventListener('keydown', function(evento){
            //console.log(evento.target.classList.contains('opcoesDoCartao-tipo'))
    
            let isLabel = evento.target.classList.contains('opcoesDoCartao-tipo')

            if(isLabel && (evento.key == 'Enter' || evento.key == ' ')){    
                evento.target.click()
            }
            
        })


        //cliquei no cartão, e na lixeira
        //pelo evento, identificar quem foi clicado
        //se for a lixeira
        // apaga o cartao, depois que a transicao aconteceu
        cartao.addEventListener('click', function(evento){

    //sempre usar o this quando o this é o this :) - tonini, vanessa . 02 de maio 2018

            let isRemove = evento.target.classList.contains('opcoesDoCartao-remove')

            if(isRemove){
                this.classList.add('cartao--some')

                this.addEventListener('transitionend', function(){
                    this.remove()
                })
            }
        })
    }

})()
