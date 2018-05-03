;(function(){

    const formNovoCartao = document.querySelector('.formNovoCartao')
        , textarea = formNovoCartao.querySelector('textarea')
        , btnSalvar = formNovoCartao.querySelector('.formNovoCartao-salvar')

    textarea.addEventListener('keydown', function() {
        btnSalvar.removeAttribute('disabled')
    })

    formNovoCartao.addEventListener('submit', function(evento){

        //evita que o formulario seja submetido e o reload da pagina aconteça
        evento.preventDefault()
        
        let conteudoCartao = textarea.value.trim()
    
        //se o textarea tiver conteudo, console.log nele
        if(conteudoCartao){
            console.log(conteudoCartao)
            this.reset() //limpa o form
        }
        //senao console.log em mensagem de erro
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