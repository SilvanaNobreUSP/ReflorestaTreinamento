document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".md-header__inner");
  var logo = document.querySelector(".md-logo");

  if (!header || !logo || document.querySelector(".md-home-button")) {
    return;
  }

  var homeButton = document.createElement("a");
  homeButton.className = "md-header__button md-icon md-home-button";
  homeButton.href = logo.href;
  homeButton.title = "Inicio";
  homeButton.setAttribute("aria-label", "Voltar para a pagina inicial");
  homeButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>' +
    "</svg>";

  var searchButton = header.querySelector('label[for="__search"]');
  header.insertBefore(homeButton, searchButton || null);
});
