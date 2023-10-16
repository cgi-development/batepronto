$(() => {
    $("#formulario2").submit((e) => {
        //caso algum par de radio buttons não tenha  sido clicado
        if(!($("input[name=s1][value=0]").is(":checked") || $("input[name=s1][value=1]").is(":checked"))
        || !($("input[name=s2][value=0]").is(":checked") || $("input[name=s2][value=1]").is(":checked"))
        || !($("input[name=s3][value=0]").is(":checked") || $("input[name=s3][value=1]").is(":checked"))
        || !($("input[name=s4][value=0]").is(":checked") || $("input[name=s4][value=1]").is(":checked"))
        || !($("input[name=s5][value=0]").is(":checked") || $("input[name=s5][value=1]").is(":checked"))){
            e.preventDefault();
            window.alert("Por favor preencha todos os campos antes de passar para a próxima etapa.");    
        }
    });
});
