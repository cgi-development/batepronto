$(() => {
    $(".nome").html(JSON.parse(localStorage.getItem('envolvidos0'))['nome']);
    $(".protocolo").html('51515d1a51sd5aeF');
    $(".condutor").html(JSON.parse(localStorage.getItem('envolvidos0')).nome);
    $(".local").html(localStorage.getItem('localSinistro'));
    $(".tipo").html(localStorage.getItem('tipoSinistro'));
});