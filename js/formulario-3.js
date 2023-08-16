$(() => {
    fetch('../json/estados.json')
    .then((response) => response.json())
    .then((estados) => estados.forEach(estado => 
        $("#estado").append(`<option>${estado.Nome}</option>`)
        ));
    
    $("#fomulario3").submit((e) => {
        if($("input[name=cep]").prop('value', '')
        || $("input[name=cep]").prop('data-valido', 'false')
        || $("input[name=logradouro]").prop('value', '')
        || $("input[name=bairro]").prop('value', '')){
            e.preventDefault();
            window.alert("Por favor, preencha os campos obrigatórios");
            $("input[name=cep]").attr("style", "border-color: red");
            $("input[name=logradouro]").attr("style", "border-color: red");
            $("input[name=bairro]").attr("style", "border-color: red");
        }
    });
})