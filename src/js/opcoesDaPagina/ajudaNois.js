;(function() {

    let listaDeAjuda = [
        {
            texto: 'Bem ao vindo ao ceep'
            , cor: '#b4d455'
            , ajuda: true
        }
        , {
            texto: 'Clique no botão linhas para mudar o layout'
            , cor: 'red'
            , ajuda: true
        }
    ]

    listaDeAjuda.forEach(function(ajuda) {
        criarCartaoNoMural(ajuda)
    })

    btnAjuda.addEventListener('click', function() {   
        
        let listaDeCartoes = document.querySelectorAll('.cartao')

        //se lista de cartoes for igual 0
        if(listaDeCartoes.length == 0){
            listaDeAjuda.forEach(ajuda =>  {
                criarCartaoNoMural(ajuda)
            })
        } 
        //maior que 0
        else {
            //console.log(typeof(listaDeCartoes));

            //transforma a NodeList em Array, invocando o seu construtor
            let listaDeCartoesArray = Array.from(listaDeCartoes)

            //encontra os cartões de ajuda e destaca eles 
            //e guarda no retorno de Filter cada cartao de ajuda na variavel listaComAjudas
            let listaComAjudas = listaDeCartoesArray
                                    .filter(cartao => {                                        
                                        if (cartao.dataset.ajuda) {
                                            cartao.style.boxShadow = '0px 0px 10px 10px yellow'
                                            return cartao
                                        }
                                    })

            //Verifica se tem algum item na lista com ajudas
            //Se nao tiver, cria os cartoes
            if(listaComAjudas.length == 0 ){
                listaDeAjuda.forEach(ajuda => {
                    criarCartaoNoMural(ajuda)
                })
            }

        }
    })
     
    btnAjuda.classList.remove('no-js')
    
})()