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

  const content = document.querySelector('.content');

const options = {
  threshold: 0.5 // Se activará cuando el 50% del div sea visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}, options);

observer.observe(content);

})