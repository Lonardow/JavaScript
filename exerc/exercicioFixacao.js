// 1) Crie uma aplicação para efetuar cálculo aritméticos de soma e subtração.
// Considere os seguintes critérios:
// 1) Ao executar o script a aplicação deve solicitar a entrada de um número, seguido de
// uma operação de soma ou subtração e posteriormente seguido de um segundo
// número.
// 2) A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema
// solicita a operação o usuário deve informar o texto ‘soma’ ou ‘subtração’ (sem as
// aspas).
// 3) Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido
// cálculo. Exemplo: calculo(num1, num2, operacao).
// 4) A função deve executar o cálculo com base na operação informada pelo usuário e na
// sequência deve retornar o valor encontrado.
// 5) Ao término o sistema deve fornecer a seguinte saída para o usuário:

function removeElement() {
  let result = 0;
  const input1 = parseInt(prompt("Digite o primeiro valor"));
  let operador = prompt("Digite o operador de adição ou subtração");
  const input2 = parseInt(prompt("Digite o segundo valor"));
  if (operador === "-") {
    result = input1 - input2;
  } else result = input1 + input2;
  document.write("O resultado é " + result);
}

removeElement();
