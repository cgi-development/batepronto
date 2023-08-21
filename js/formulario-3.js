$(() => {
    $("#estado").on("change", () => {
        fetch('./json/cidades.json')
        .then(response => response.json())
        .then(cidades => {
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
            .then(cidades => {
                $("#municipioPessoa").html("");
                cidades
                .filter(cidade => cidade.Estado === $("#estadoPessoa").prop("value"))
                .forEach(cidade =>
                    $("#municipioPessoa").append(`<option value="${cidade.ID}">${cidade.Nome}</option>`))
                })
            });
            
            $("#fomulario3").submit((e) => {
                if ($("input[name=cep]").prop('value', '')
                || $("input[name=cep]").prop('data-valido', 'false')
            || $("input[name=logradouro]").prop('value', '')
            || $("input[name=bairro]").prop('value', '')) {
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
            let dadosFormatados = [];
            
            dados.forEach((value, key) => {
                dadosFormatados[key] = value;
            });
            
            $("#envolvidos").append(`<tr>
            <td>${dadosFormatados['nome']}</td>
            <td>${dadosFormatados['cpf']}</td>
            <td>${dadosFormatados['habilitacaoNumero']}</td>
            <td>${dadosFormatados['habilitacaoCategoria']}</td>
            <td><a onclick="$(this).parent().parent().remove()"><i class="fa fa-close text-danger"></i></a></td>
            </tr>`);
        });
        
        $("form[data-form-veiculo]").submit((e) => {
            e.preventDefault();
            let dados = new FormData(e.target);
            let dadosFormatados = [];
            
            dados.forEach((value, key) => {
            dadosFormatados[key] = value;
        });
        
        $("#veiculos").append(`<tr>
        <td>${dadosFormatados['veiculoPlaca']}</td>
            <td>${dadosFormatados['veiculoTipo']}</td>
            <td>${dadosFormatados['veiculoMarca']} ${dadosFormatados['veiculoModelo']}</td>
            <td><a onclick="$(this).parent().parent().remove()"><i class="fa fa-close text-danger"></i></a></td>
            </tr>`);
        });

    $('input[type="file"]').bind('change', function () {
        $("#anexoNome").html($('input[type="file"]').val());
    });

    $("form[data-form-anexo]").submit((e) => {
        e.preventDefault();
        let dados = new FormData(e.target);
        let dadosFormatados = [];
        
        dados.forEach((value, key) => {
            console.log([key, value]);
            if (key === "anexoArquivo") {
                dadosFormatados[key] = value.name;
            } else {
                dadosFormatados[key] = value;
            }
        });
        
        $("#anexos").append(`<tr>
        <td>${dadosFormatados['anexoTipo']}</td>
        <td>${dadosFormatados['anexoArquivo']}</td>
        <td><a onclick="$(this).parent().parent().remove()"><i class="fa fa-close text-danger"></i></a></td>
        </tr>`);
    });

    fetch('./json/estados.json')
        .then((response) => response.json())
        .then((estados) => estados.forEach(estado => {
            $(".estado").append(`<option value="${estado.ID}">${estado.Nome}</option>`)
        }
        ));

    $("#formSinistro").submit((e) => {
        e.preventDefault();
        let dados = new FormData(e.target);
        
        let contadorenvolvidos = 0;
        $("#envolvidos").children().toArray().forEach(
            (linha, key) => {
                let obj = { nome: "", cpf: "", habilitacao: "", tipo: "" }
                obj.nome = $(linha).find('td:eq(0)').html();
                obj.cpf = $(linha).find('td:eq(1)').html();
                obj.habilitacao = $(linha).find('td:eq(2)').html();
                obj.tipo = $(linha).find('td:eq(3)').html();
                dados.append(`envolvidos${contadorenvolvidos}`, JSON.stringify(obj));
                contadorenvolvidos++;
            }
            )
            let contadorveiculos = 0;
            $("#veiculos").children().toArray().forEach(
                (linha) => {
                    let obj = { placa: "", tipo: "", caracteristica: ""}
                    obj.placa = $(linha).find('td:eq(0)').html();
                    obj.tipo = $(linha).find('td:eq(1)').html();
                    obj.caracteristica = $(linha).find('td:eq(2)').html();
                    dados.append(`veiculos${contadorveiculos}`, JSON.stringify(obj));
                    contadorveiculos++;
                }
                )
                let contadoranexos = 0;
                $("#anexos").children().toArray().forEach(
                    (linha) => {
                        let obj = { tipo: "", anexos: ""}
                        obj.tipo = $(linha).find('td:eq(0)').html();
                        obj.anexos = $(linha).find('td:eq(1)').html();
                        dados.append(`anexos${contadoranexos}`, JSON.stringify(obj));
                        contadoranexos++;
                    }
                )
                console.log(dados);
                dados.forEach((value, key) => {
                localStorage.clear();
                localStorage.setItem(key, JSON.stringify(value));
        });
        
        console.log(localStorage);
        window.location.href = "./formulario-4.html";
    })

});

function contaCaracteresRestantes(idTextarea, idSpan) {
    const total = 32700;
    let restante = (total - $(idTextarea).prop("value").length);
    $(idSpan).html(restante);
}

