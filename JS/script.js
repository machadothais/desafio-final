// Função para verificar se há caracteres não permitidos no texto
function contemCaracteresNaoPermitidos(texto) {
  const invalidChars = /[^a-z\s]/;

  if (invalidChars.test(texto)) {
    console.log(
      "Caracteres não permitidos encontrados:",
      texto.match(invalidChars)
    );
    alert(
      "Por favor, digite apenas letras minúsculas, sem acentos ou caracteres especiais."
    );
    return true; // Retorna true para indicar que caracteres não permitidos foram encontrados
  }

  return false; // Retorna false se não houver caracteres não permitidos
}

//=====================================================================//

// Função para criptografar um texto
function encryptText(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

// Função para descriptografar um texto
function decryptText(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

//=====================================================//
// Função principal para criptografar
function criptografar(tipo) {
  var textoInput = document.getElementById("texto").value.trim();

  // Chama a função de verificação antes de continuar
  if (contemCaracteresNaoPermitidos(textoInput)) {
    return;
  }

  console.log("Texto válido para criptografia:", textoInput);

  var resultado = encryptText(textoInput);

  // Atualiza a exibição com o resultado
  exibirResultadoDinamico(resultado, tipo);
}

//=====================================================//
// Função principal para descriptografar
function descriptografar(tipo) {
  var textoInput = document.getElementById("texto").value.trim();

  // Chama a função de verificação antes de continuar
  if (contemCaracteresNaoPermitidos(textoInput)) {
    return;
  }

  console.log("Texto válido para descriptografia:", textoInput);

  var resultado = decryptText(textoInput);

  // Atualiza a exibição com o resultado
  exibirResultadoDinamico(resultado, tipo);
}

//=====================================================================//
// Função para exibir o resultado no HTML
function exibirResultadoDinamico(resultado, tipo) {
  var containerRight = document.querySelector(".container-right");
  var resultadoH1 = document.querySelector(".resultado-h1");
  var resultadoH5 = document.querySelector(".resultado-h5");
  var resultadoLabel = document.querySelector(".resultado-label");
  var resultadoTexto = document.querySelector(".resultado-texto");

  // Conteúdo inicial
  containerRight.style.display = resultado ? "none" : "flex";
  resultadoLabel.style.display = resultado ? "block" : "none";

  // Conteúdo dinâmico
  if (resultado) {
    resultadoTexto.value = resultado;
    resultadoH1.textContent =
      tipo === "criptografar"
        ? "Texto Criptografado"
        : "Texto Descriptografado";
    resultadoH5.textContent = "Texto " + tipo + ":";
  } else {
    resultadoH1.textContent = "Nenhuma mensagem ";
    resultadoH5.textContent =
      "Digite um texto que você deseja criptografar ou descriptografar.";
  }
}

function limparTela() {
  document.getElementById("texto").value = "";
  exibirResultadoDinamico("", "");
}

function copiarTexto() {
  var resultadoTexto = document.querySelector(".resultado-texto");
  resultadoTexto.select();
  document.execCommand("copy");
}
