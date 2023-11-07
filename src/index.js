import "./styles/index.module.scss";
import web from "./assets/web2.png";

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("web");
 
  if(app) {
     const imgWeb = document.createElement("img");
    imgWeb.src = web;

  app.appendChild(imgWeb);
  } else {
    console.log("no hay video")
  }
})