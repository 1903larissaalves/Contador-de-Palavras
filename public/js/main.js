var campo = $("#campoDigitacao");
var tempoInicial = $("#tempoDigitacao").text();

$(function() {
    cronometro();
    inicializaContadores();
    atualizaTamanhoFrase();
    $("#reiniciar").click(reiniciarJogo);
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
            campo.addClass("campo-desativado");
            //campo.toggleClass("campo-desativado"); --faz o add class e remove
        }
    },1000);

});
}

function reiniciarJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contadorPalavras").text("0");
    $("#contadorCaracteres").text("0");
    $("#tempoDigitacao").text(tempoInicial);
    cronometro();
}
