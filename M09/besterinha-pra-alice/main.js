$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    $('#enderecoNovaImagem').on('focus', function() {
        $(this).prop('readonly', false);
    });

    $('#enderecoNovaImagem').on('blur', function() {
        $(this).prop('readonly', true);
    });

    $('form').on('submit', function(e){ 
        e.preventDefault();
        const enderecoNovaImagem = $('#enderecoNovaImagem').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoNovaImagem}" alt="Imagem da Galeria"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    Ver imagem em tamanho real 
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#enderecoNovaImagem').val('');
    });
});
