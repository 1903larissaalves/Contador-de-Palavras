var campo = $("#campoDigitacao");
var tempoInicial = $("#tempoDigitacao").text();

$(function() {
    cronometro();
    inicializaContadores();
    atualizaTamanhoFrase();
    $("#reiniciar").click(reiniciarJogo);
    verificaFrase();
    removePlacar();
});


function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#quantidadePalavras").text(numeroPalavras);
}


function inicializaContadores() {
    campo.on("input", function(){

        var conteudo = campo.val();
    
        var quantidadePalvras = conteudo.split(/\s+/).length -1;
        $("#contadorPalavras").text(quantidadePalvras);
    
        var quantidadeCaracteres = conteudo.length;
        $("#contadorCaracteres").text(quantidadeCaracteres);
    
    });
}

function cronometro() {
    var tempoRestante = $("#tempoDigitacao").text();
    
    campo.one("focus", function(){
        var cronometro = setInterval(function(){
        tempoRestante--;
        $("#tempoDigitacao").text(tempoRestante);
        if(tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometro);
            //campo.addClass("campo-desativado");
            campo.toggleClass("campo-desativado"); //--faz o add class e remove
            inserePlacar();
        }
    },1000);

});
}

function verificaFrase(){
    var frase = $(".frase").text();
    campo.on("input", function() {
        var digitado = campo.val();
        var comparar = frase.substr(0, digitado.length);
        if(digitado == comparar){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}
function inserePlacar() {
    var placar = $("#placar");
    var corpoTabela = placar.find("tbody");
    var usuario = "Larissa";
    var remover = "<a href='#'><i class='small material-icons'>delete</i></a>"
    var numeroPalavras = $("#contadorPalavras").text();

    var linha = "<tr>" + 
                        "<td>" + usuario + "</td>" +
                        "<td>" + numeroPalavras + "</td>" + 
                        "<td>" + remover + "</td>" + 
               "</tr>"

    corpoTabela.prepend(linha);
}

function removePlacar(){
    var deletar = $(".remove");
    deletar.on("click",function(){
    event.preventDefault();
    $(this).parent().parent().remove();
    });
}

function reiniciarJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contadorPalavras").text("0");
    $("#contadorCaracteres").text("0");
    $("#tempoDigitacao").text(tempoInicial);
    cronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}
