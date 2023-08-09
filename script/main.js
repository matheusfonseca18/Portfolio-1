// declarando variavel pra ser usada
const menuMobile = document.querySelector(".mobile-menu");

function menuShow() {
  // se (verdadeiro) elemento da atribuida a varoavel tem a classe, remova a classe e muda a imagem 
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".menu-icon").src = "img/icones/menu.png";
    // se (falso) nao tem, adiciona a classe e mude a imagem
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".menu-icon").src = "img/icones/close.png";
  }
}

window.onclick = (event) => {
  if (!event.target.matches(".menu-icon")) {
    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
      document.querySelector(".menu-icon").src = "img/icones/menu.png";
    }
  }
};

menuMobile.addEventListener("click", (event) => event.stopPropagation());

  