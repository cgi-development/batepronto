$(() => {
    $("#estado").on("change", () => {
        fetch('./json/cidades.json')
        .then(response => response.json())
        .then(cidades =>{
            $("#municipio").html("");
            cidades
            .filter(cidade => cidade.Estado === $("#estado").prop("value"))
            .forEach(cidade => 
                $("#municipio").append(`<option value="${cidade.ID}">${cidade.Nome}</option>`))
        })
    });

    $("#estadoPessoa").on("change", () => {
        fetch('./json/cidades.json')
        .then(response => response.json())
        .then(cidades =>{
            $("#municipioPessoa").html("");
            cidades
            .filter(cidade => cidade.Estado === $("#estadoPessoa").prop("value"))
            .forEach(cidade => 
                $("#municipioPessoa").append(`<option value="${cidade.ID}">${cidade.Nome}</option>`))
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

    $("#descreveSinistro").on('input', () => {
        contaCaracteresRestantes("#descreveSinistro", "#caracteresSinistro");
    });

    $("#declaracaoAvaria").on('input', () => {
        contaCaracteresRestantes("#declaracaoAvaria", "#caracteresAvaria");
    });

    $("form[data-form-pessoa]").submit((e) => {
        e.preventDefault();
        let dados = new FormData(e.target);
        console.log(dados);
        $("#envolvidos").append(`<tr>
            <td>${dados.nome}</td>
            <td>${dados.cpf}</td>
            <td>${dados.habilitacaoNumero}</td>
            <td>${dados.habilitacaoCategoria}</td>
            <td></td>
            </tr>`);
    });

    fetch('./json/estados.json')
    .then((response) => response.json())
    .then((estados) => estados.forEach(estado => {
            $(".estado").append(`<option value="${estado.ID}">${estado.Nome}</option>`)
        }
    ));
    
});

function contaCaracteresRestantes(idTextarea, idSpan){
    const total = 32700;
    let restante = (total - $(idTextarea).prop("value").length);
    $(idSpan).html(restante);
}