$(() => {
    console.log(localStorage.getItem('envolvidos0'));
    let dados = JSON.parse(new Object(JSON.parse(localStorage.getItem('envolvidos0'))));
    console.log(dados);
    $(".nome").html(dados.nome);
    $(".protocolo").html(makeid(5));
    $(".condutor").html(dados.nome);
    $(".local").html(dados.localinistro);
    $(".tipo").html(dados.temposinistro);
    
});

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}