function responder() {
  var letra = document.querySelector("#letter span").textContent;

  console.log(letra);

  document.querySelectorAll(".answers label").forEach((e, i, l) => {
    var tema = e.getElementsByTagName(span).item(0).textContent;
    console.log(tema);

    var input = e.getElementsByTagName(input).item(0);
    console.log(input.innerHtml);

    input.text = getAnswer(letra, tema);
  });

  console.log("fim");
}

function getAnswer(letra, tema) {
  console.log(`pegando resposta: ${letra} - ${tema}`);
  return "teste";
}
