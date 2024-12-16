$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false
    });
    
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    });

    $('#nome').mask('Z', {
        translation: {
            'Z': { pattern: /[a-zA-ZÀ-ú\s]/, recursive: true }
        },
        placeholder: 'Exemplo Exemplo'
    });

    $('#email').mask('A', {
        translation: {
            'A': { pattern: /[\w@\-.+]/, recursive: true }
        },
        placeholder: 'exemplo@dominio.com'
    });

    $('#endereco').mask('Z', {
        translation: {
            'Z': { pattern: /[a-zA-Z0-9À-ú\s,.-]/, recursive: true }
        },
        placeholder: 'Rua exemplo, número 123'
    });

    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });
    
    $('form').validate({
        rules: {
            nome: { 
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: { 
                required: true
            },
            endereco: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira um nome correto',
            telefone: 'Por favor, insira um telefone válido',
            email: 'Por favor, insira um e-mail válido',
            endereco: 'Por favor, insira um endereõ válido',
            cep: 'Por favor, insira um CEP válido',
            cpf: 'Por favor, insira um CPF válido'
        },
    });
});

