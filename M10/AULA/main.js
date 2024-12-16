$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    });

    $('form').validate({
        rules: {
            nome: { //esse plugin trabalha com a propriedade "name" e não id ou class ou type
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: { //obs: não pode usar traços nessa parte, p. ex. "veiculo-interesse" não funcionaria aqui 
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira um nome correto',
            telefone: 'Por favor, insira um telefone válido',
            email: 'Por favor, insira um e-mail válido'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

            const nomeVeiculo = $(this).parent().find('h3').text();

            $('#veiculo-interesse').val(nomeVeiculo);

            $('html').animate({
                scrollTop: destino.offset().top
            }, 1000) //duração da animação, em ms
    })
});