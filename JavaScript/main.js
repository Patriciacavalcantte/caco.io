function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

const titulo = document.querySelector('h1');
typeWriter(titulo);
/*Efeito de click*/

window.onclick = myFunction;
  function myFunction() {
document.getElementsByClassName("texto")[0].innerHTML = "Você vai votar  13  em outubro! ";
document.getElementsByClassName("circulo")[0].style.background = "tomato";

}


