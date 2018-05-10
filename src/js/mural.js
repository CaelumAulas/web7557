;(function(){
    'use strict'
    
    let numeroDoCartao = 0 

    window.criarCartaoNoMural = function (objetoCartao){
    
        const mural = document.querySelector('.mural')
        let cartao = document.createElement('article')
        
        numeroDoCartao++
        
        cartao.setAttribute('tabindex', 0)
        cartao.setAttribute('id', `cartao_${numeroDoCartao}`)
        cartao.classList.add('cartao')
        cartao.style.backgroundColor = objetoCartao.cor
    
        if(objetoCartao.ajuda){
            cartao.setAttribute('data-ajuda', objetoCartao.ajuda)
        }
        
        cartao.innerHTML = `         
            <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
    
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
            </label>
    
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0" title="Importante">
                Importante
            </label>
    
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
            </label>
    
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
            </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${objetoCartao.conteudo}</p>
        `
        
        mural.insertAdjacentElement('afterbegin', cartao)
        
        cartao.addEventListener('focusin', function () {
            this.classList.add('cartao--focado')
        })
        
        cartao.addEventListener('focusout', function () {
            this.classList.remove('cartao--focado')
        })
        
        cartao.addEventListener('change', function (evento) {
        
            let tipoCartao = evento.target.classList.contains('opcoesDoCartao-radioTipo')
        
            if (tipoCartao) {
                //Mudar o background do cartão para o value do input radio clicado
                this.style.backgroundColor = evento.target.value
            }
        })
        
        cartao.addEventListener('keydown', function (evento) {
            //console.log(evento.target.classList.contains('opcoesDoCartao-tipo'))
        
            let isLabel = evento.target.classList.contains('opcoesDoCartao-tipo')
        
            if (isLabel && (evento.key == 'Enter' || evento.key == ' ')) {
                evento.target.click()
            }
        
        })
        
        cartao.addEventListener('click', function (evento) {
        
            let isRemove = evento.target.classList.contains('opcoesDoCartao-remove')
        
            if (isRemove) {
                this.classList.add('cartao--some')
        
                this.addEventListener('transitionend', function () {
                    this.remove()
                })
            }
        })

    }

})()