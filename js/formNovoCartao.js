;(function(){

    const teste = document.createElement('section')
    console.log(teste);
    
    const formNovoCartao = document.querySelector('.formNovoCartao')

    formNovoCartao.addEventListener('submit', function(evento){

        //evita que o formulario seja submetido e o reload da pagina aconteça
        evento.preventDefault()
        
        let conteudoCartao = this.querySelector('textarea').value.trim()

        //se o textarea tiver conteudo, console.log nele
        if(conteudoCartao){
            console.log(conteudoCartao)
        }
        //senao console.log em mensagem de erro
        else {
            console.log('Digite algum conteúdo!!')    
        }
        
    })

    formNovoCartao.classList.remove('no-js')
    
})()