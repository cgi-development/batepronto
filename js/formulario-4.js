$(() => {
    let dados = JSON.parse(new Object(JSON.parse(localStorage.getItem('envolvidos0'))));
    $(".nome").html(dados.nome);
    $(".protocolo").html('51515d1a51sd5aeFA');
    $(".condutor").html(dados.nome);
    $(".local").html(dados.localinistro);
    $(".tipo").html(dados.temposinistro);
    
});

