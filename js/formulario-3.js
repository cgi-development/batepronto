$(() => {
    fetch('./json/estados.json')
    .then((response) => response.json())
    .then((estados) => estados.forEach(estado => 
        $("#estado").append(`<option value="${estado.ID}">${estado.Nome}</option>`)
        ));
    
    $("#estadoVeiculo").change((this) => {
        console.log(this.value);
        fetch('./json/cidades.json')
        .then(response => response.json())
        .then(cidades =>{
            cidades
            .filter(cidade => cidade.Estado === this.value)
            .forEach(cidade => 
                $("#municipioVeiculo").append(`<option value="${cidade.ID}">${cidade.Nome}</option>`))
        })
    });
    
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