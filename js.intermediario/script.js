function mudarh1(tantoFaz) {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.innerText = tantoFaz.value;
}

function hideh1() {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.style.visibility = "hidden";
}

function appearh1() {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.style.visibility = "visible";
}

function onOver(element) {
  element.style.backgroundColor = "red";
}

function onOut(element) {
  element.style.backgroundColor = "purple";
}

let a = { name: "Guizão", age: 18 };

console.log(a);
console.log(JSON.stringify(a));

console.log(".");

let b = '{"nome": "Gui", "idade": 18}';

console.log(b);
console.log(JSON.parse(b));
