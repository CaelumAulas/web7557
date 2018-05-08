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

    console.log(listaDeAjuda, 'load');

    btnAjuda.addEventListener('click', () => {
        
        
        console.log(listaDeAjuda, 'click');
       
        
        let listaDeCartoes = document.querySelectorAll('.cartao')

        if(listaDeCartoes){
            console.log(listaDeCartoes.length);
            
        } else {
            console.log(listaDeCartoes.length);
            console.log(listaDeAjuda, 'else');
            
            listaDeAjuda.forEach(ajuda =>  {
                criarCartaoNoMural(ajuda)
            })
        }
        

        // if(listaDeCartoes){

        //         listaDeCartoes.forEach(function (cartao) {
        
        //             if (!cartao.dataset.ajuda){
                       
                        
        //             }
        
        //         })

        // }

    })
     
    btnAjuda.classList.remove('no-js')
    
})()