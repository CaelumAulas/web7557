;(function() {

    btnAjuda.addEventListener('click', function(){

        let ajudas = [
            {
                texto: 'Bem ao vindo ao ceep'
                ,cor: '#b4d455'
            }
            , {
                texto: 'Clique no botão linhas para mudar o layout'
                ,cor: 'red'  
            }
        ]

        // for(let i = 0; i < ajudas.length; i++){
        //     alert(ajudas[i])
        // }

        ajudas.forEach(function(ajuda) {
            
                alert(ajuda.texto)

        })

    })
    
    btnAjuda.classList.remove('no-js')
    
})()