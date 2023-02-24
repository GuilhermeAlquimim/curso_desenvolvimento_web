function mudarh1(tantoFaz) {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.innerText = tantoFaz.value;
}

function hideh1() {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.style.visibility = "hidden";
}
