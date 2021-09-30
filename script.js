//random * 11 pois sempre retorna entre 0 e 1
var numeroSecreto = parseInt(Math.random() * 11);
console.log("O num secreto é: " + numeroSecreto);
var numeroMaxTent = "1";

// Function sendo chamada no onclick
function Chutar() {
  var valorInputDoUser = parseInt(document.getElementById("valor").value);
  var localResultHTML = document.getElementById("resultado");
  var localGifHTML = document.getElementById("exibeGif");

  //if verificando o numero max. de 3 tentativas...
  if (numeroMaxTent <= 3) {
    //Comparação numero inserido e numero secreto
    if (valorInputDoUser == numeroSecreto) {
      console.log("aee ACERTOU");
      localResultHTML.innerHTML =
        "Parabéns, você digitou: " + numeroSecreto + ", e acertou!";
      localGifHTML.innerHTML =
        "<img src='https://c.tenor.com/Jdf2Dse33pkAAAAd/luffy-dance-go-luffy.gif'>";
    } else if (valorInputDoUser < 0 || valorInputDoUser > 10) {
      localResultHTML.innerHTML =
        "Opa, você ultrapassou o valor 10, por favor, tente novamente digitando um valor de 0 a 10";
      localGifHTML.innerHTML =
        "<img src='https://c.tenor.com/UTxKJNlZilwAAAAi/luffy-monkey-d-luffy.gif'>";
    } else {
      console.log("você errou, tente novamente");
      localResultHTML.innerHTML =
        "Opa, você digitou: " + valorInputDoUser + ", e errou!";
      localGifHTML.innerHTML =
        "<img src='https://c.tenor.com/nhwNAUK4QlUAAAAC/luffy-sad.gif'>";
    }
  } //fecha if tentativas
  else {
    localResultHTML.innerHTML =
      "Opa, parece que você atingiu o limite de tentativas, bye, bye!";
    localGifHTML.innerHTML =
      "<img src='https://c.tenor.com/TUvcFjOqnG0AAAAC/cute-adorable.gif'>";
    console.log("você atingiu o limite de tentativas");
  }
  numeroMaxTent++;
}