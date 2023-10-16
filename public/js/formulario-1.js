$(function(){
    $("#formulario1").submit((e) => {
        if(!$("input[name='aceite']").is(":checked")){
            e.preventDefault();
            window.alert("Você precisa aceitar os termos e condições de uso para continuar com o registro de sinistro")
        }
    })
})