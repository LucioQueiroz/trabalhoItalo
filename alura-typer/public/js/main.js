	var tempoInicial = $("#tempo-digitacao").text();
	var campo= $(".campo-digitacao");

		$(function(){

	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
		$("#botao-reiniciar").click(reiniciaJogo);

});


 function atualizaTamanhoFrase(){
	var frase= $(".frase").text();
	var numPalavras = frase.split(" ").length;
	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numPalavras);
}

 function inicializaContadores(){
	campo.on("input",function(){
	var conteudo = campo.val();

	var qtdPalavras = conteudo.split(" ").length;
		$("#contador-palavras").text(qtdPalavras);

	var qtdCaracteres = conteudo.length;
		$("#contador-caracteres").text(qtdCaracteres);
});
}
	

 function inicializaCronometro(){
	var tempoRestante= $("#tempo-digitacao").text();
	campo.one("focus",function(){
	var cronometroID= setInterval(function(){
		tempoRestante--;	
		$("#tempo-digitacao").text(tempoRestante);
		if (tempoRestante<1){
			campo.attr("disabled",true);
		clearInterval(cronometroID);
		campo.addClass("campo-desativado");
	}	
 
},1000);
});
}
var frase = $(".frase").text();
	campo.on("input",function(){
		var digitado = campo.val();
		console.log(frase);
		console.log(digitado);
		if (digitado == frase){
			console.log("esta certo");
		}else{
			//console.log("esta errado");
		
		}
});


 function reiniciaJogo(){
			campo.attr("disabled",false);
			campo.val("");
		$("#contador-palavras").text("0");
		$("#contador-caracteres").text("0");
		$("#tempo-digitacao").text(tempoInicial);
		inicializaCronometro();	
		
}		