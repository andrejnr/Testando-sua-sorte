var numeroSecreto = parseInt(Math.random() * 11);
var quantidadeTentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (quantidadeTentativas == 0) {
    elementoResultado.innerHTML = "Acabaram suas tentativas";
  } else if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns voce esta com sorte";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "O número é menor";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "O número é maior";
  } else {
    elementoResultado.innerHTML = "Errou infelizmente não é seu dia";
  }
  quantidadeTentativas--;
}