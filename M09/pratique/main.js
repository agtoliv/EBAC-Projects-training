$(document).ready(function(){
    $('form').on('submit', function (e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<h3>${novaTarefa}</h3>`).appendTo(novoItem)
        $(novaTarefa).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);

        $("ul li").click(function() {
            $(this).find("h3").toggleClass("strike-through");
        });
    });
    
});