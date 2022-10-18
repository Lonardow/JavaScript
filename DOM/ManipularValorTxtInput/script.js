let getInput = document.getElementById("entrada").value;

let getLetra = document.getElementById("letra");

let getNumber = document.getElementById("numero");

function distribuiCaractere() {
  // selecionar elemento digitado
  let getInput = document.getElementById("entrada").value;

  let getLetra = document.getElementById("letra");

  let getNumber = document.getElementById("numero");

  document.getElementById("entrada").value = "";

  //limpar espaços em branco nas extremidades da string
  getInput.trim();

  switch (getInput) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      //Adicionar o caractere no campo referente a numeros
      getNumber.value += getInput;
      break;
    default:
      //adicionar o caractere no campo referente a letras
      getLetra.value += getInput;
  }
}
