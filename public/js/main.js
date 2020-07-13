var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;

var tamanhoFrase = $("#quantidadePalavras").text(numeroPalavras);

var campo = $("#campoDigitacao");
campo.on("input", function(){

    var conteudo = campo.val();

    var quantidadePalvras = conteudo.split(/\s+/).length -1;
    $("#contadorPalavras").text(quantidadePalvras);

    var quantidadeCaracteres = conteudo.length;
    $("#contadorCaracteres").text(quantidadeCaracteres);

});