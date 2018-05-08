;(function(){

    const formNovoCartao = document.querySelector('.formNovoCartao')
        , textarea = formNovoCartao.querySelector('textarea')
        , btnSalvar = formNovoCartao.querySelector('.formNovoCartao-salvar')
        , mural = document.querySelector('.mural')

    textarea.addEventListener('keydown', function() {
        btnSalvar.removeAttribute('disabled')
    })

    formNovoCartao.addEventListener('submit', function(evento){

        //evita que o formulario seja submetido e o reload da pagina aconteça
        evento.preventDefault()
        
        let conteudoCartao = textarea.value.trim()
    
        if(conteudoCartao){
            this.reset()

            let cartao = {
                texto: conteudoCartao 
            }

            criarCartaoNoMural(cartao)
            
            textarea.focus()
        }
        else {
            let msgErroEl = document.createElement('p')

            btnSalvar.setAttribute('disabled', true)  
            msgErroEl.textContent = 'Digite algum conteúdo!'
            msgErroEl.classList.add('formNovoCartao-msg')
            
            this.insertBefore(msgErroEl,btnSalvar)
           
            msgErroEl.addEventListener('animationend', function(){
                this.remove()
            })

        }
    })

    formNovoCartao.classList.remove('no-js')
    
})()