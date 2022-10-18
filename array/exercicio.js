let obj = ["Cadeira", "Impressora", "Garfo"];

function adicionar() {
  let target = document.getElementById("input").value;
  if (target === "") {
    alert("Informe um valor valido");
  }
  if (obj.includes(target)) {
    alert("Objeto já foi adicionado.");
  } else obj.push(target);

  document.getElementById("input").value = "";
  console.log(obj);
}

function ordenar() {
  obj.sort();
  console.log(obj);
}

// let x = document.getElementById("input").value;

// function b() {
//   let x = document.getElementById("input").value;
//   console.log(x);
//   console.log(obj.includes(x));
//   console.log(obj);
// }
