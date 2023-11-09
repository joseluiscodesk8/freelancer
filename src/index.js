import "./styles/index.scss";
import web from "./assets/WF.png";

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("web");
 
  if(app) {
     const imgWeb = document.createElement("img");
    imgWeb.src = web;

  app.appendChild(imgWeb);
  } else {
    console.log("no hay video")
  }

  const contentElements = document.querySelectorAll('.content');
  console.log(contentElements);

const options = {
  threshold: 0.2 // Se activará cuando el 50% del div sea visible
};

if (contentElements.length > 0) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, options);

  contentElements.forEach(element => {
    observer.observe(element);
  });
} else {
  console.error("No se encontraron elementos con la clase .content");
}
});