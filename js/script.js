$(document).ready(function () { 
    var $cep = $("#cep");
    $cep.mask('00000-000');

    $("#botao").bind("click", buscaCep)
    $("#cep").bind("keypress", function(e){
        if (e.which == 13) buscaCep();
    })

    function buscaCep(){
        var valorCep = $("#cep").val();
        var cep = valorCep.replace('-','');

        $.getJSON (`https://viacep.com.br/ws/${cep}/json`, function(data){
            
            var informacoes = "<tbody>"
            
            $.each(data, function(chave, valor){
                
                if(!valor) valor = "N/A";
                
                informacoes = informacoes + `<tr><td class="font-weight-bold">${chave}</td><td>${valor}</td></tr>`
            });

            var informacoes = informacoes + "</tbody>";

            $("#minha-tabela").html(informacoes);
        })
    }

});