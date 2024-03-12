import "./styles/index.scss";
import web from "./assets/WF.png";

function detectarIdiomaNavegador() {
  const idiomaNavegador = navigator.language || navigator.userLanguage;
  const idiomaPreferido = idiomaNavegador.split('-')[0];

  // Contenido en inglés
  const contenidoIngles = `
  <main>
    <figure id="web" class="content"></figure>
  </main>
  <br />

  <section>
    <section class="content">
      <h1>Ready to Bring Your Ideas to Life?</h1>
      <br />
      <p>
        If you're looking for a dedicated and passionate web developer who can turn your digital dreams into reality, you've come to the right place! I'm ready to embark on new exciting projects. Contact me today, and let's create something incredible together!
      </p>
      <br />
    </section>

    <p class="content">
      Hello! I'm <b>José Luís</b>, a passionate freelance web developer with a creative mindset and an obsession for technical excellence. With years of experience in the web development world, I'm dedicated to turning your ideas into exceptional websites and applications that not only captivate your users but also drive your business towards digital success.
    </p>
    <br />

    <section class="content">
      <h3>
        <i class="fa-solid fa-star"></i> Experience and Technology Expertise
      </h3>
      <br />
      <p>
        My skills include mastery of cutting-edge technologies like Next.js, SASS, Node, Webpack, and REST APIs. I'm constantly staying updated with the latest trends and tools to ensure your project is at the forefront.
      </p>
      <br />
    </section>

    <section class="content">
      <h3><i class="fa-solid fa-rocket"></i> Optimization and Performance</h3>

      <br />

      <p>
        I don't just create visually appealing websites; I also ensure they are fast, efficient, and highly functional. Optimization is key in my approach to guarantee an exceptional user experience.
      </p>
      <br />
    </section>

    <section class="content">
      <h3>
        <i class="fa-brands fa-accessible-icon"></i> Accessibility for All
      </h3>
      <br />

      <p>
        I create websites that are accessible to all people, regardless of their abilities or disabilities. I make sure that all users can fully enjoy the digital experience you offer.
      </p>
      <br />
    </section>

    <section class="content">
      <h3><i class="fa-solid fa-handshake"></i> Transparent Collaboration</h3>
      <br />

      <p>
        I work closely with you every step of the way. From conceptualization to implementation, I'll keep you informed and engaged, ensuring your vision becomes a reality.
      </p>
      <br />
    </section>

    <section class="content">
      <h3>
        <i class="fa-solid fa-hand-holding-heart"></i> Guaranteed Results
      </h3>
      <br />

      <p>
        My goal is to exceed your expectations. I work tirelessly to deliver high-quality projects and tangible results that drive your business forward and create a lasting impact.
      </p>
      <br />
    </section>
  </section>

  <aside>
    <h2 class="content"><i class="fa-solid fa-briefcase"></i> Briefcase</h2>
    <section class="content">
      <p><b>Company:</b> Agagem</p>
      <h3>E-commerce <i class="fa-solid fa-money-bill"></i></h3>

      <p>
        <i class="fa-solid fa-globe"></i> Mobile Device Optimization <i class="fa-solid fa-check"></i>
      </p>

      <p>
        <i class="fa-solid fa-users"></i> Intuitive User Interface
        <i class="fa-solid fa-check"></i>
      </p>

      <p>
        <i class="fa-solid fa-cart-plus"></i> Efficient Shopping Cart
        <i class="fa-solid fa-check"></i>
      </p>

      <a href="https://agagem.vercel.app/" target="_blank">Agagem.com</a>
    </section>

    <section class="content">
      <p><b>Company:</b> Enginectra</p>
      <h3>Redesign <i class="fa-solid fa-pen-nib"></i></h3>

      <p>
        <i class="fa-solid fa-globe"></i> Mobile Device Optimization <i class="fa-solid fa-check"></i>
      </p>

      <p>
        <i class="fa-solid fa-hourglass-half"></i> Performance and Speed
        <i class="fa-solid fa-check"></i>
      </p>

      <p>
        <i class="fa-solid fa-earth-americas"></i> Cross-browser Compatibility <i class="fa-solid fa-check"></i>
      </p>

      <a href="https://engineer-joseluiscodesk8.vercel.app/" target="_blank"
        >Enginectra.com</a
      >
    </section>

    <section class="content">
    <p><b>Company:</b> Megumi</p>
    <h3>Menu Restaurante <i class="fa-solid fa-utensils"></i></h3>

    <p>
      <i class="fa-solid fa-globe"></i> Optimización para Dispositivos
      Móviles <i class="fa-solid fa-check"></i>
    </p>

    <p>
      <i class="fa-solid fa-hourglass-half"></i> Rendimiento y Performance
      <i class="fa-solid fa-check"></i>
    </p>

    <p>
      <i class="fa-solid fa-earth-americas"></i> Compatibilidad con todos
      los Navegadores <i class="fa-solid fa-check"></i>
    </p>

    <a href="https://megumisushiwok.vercel.app/" target="_blank"
      >megumi.vercel.app</a
    >
  </section>
  </aside>

  <footer class="content">
    <section>
      <h4>Contact</h4>
      <br />
      <p><i class="fa fa-envelope"></i> jlgomezangarita@gmail.com</p>
      <p><i class="fa fa-phone"></i> +57 3053584113</p>
    </section>

    <section>
      <h4>Social Media</h4>
      <br />
      <a
        href="https://www.linkedin.com/in/jos%C3%A9-lu%C3%ADs-g%C3%B3mez-angarita-5785941a3/"
        target="_blank"
        ><i class="fab fa-linkedin"></i> LinkedIn</a
      ><br />
      <a href="https://github.com/joseluiscodesk8" target="_blank"
        ><i class="fab fa-github"></i> GitHub</a
      ><br />
    </section>

    <section>
        <h4>Estudios</h4>
        <br />
        <span>Platzi escuela de tecnoligia.</span>
        <br />
        <a href="https://titles-app-joseluis.vercel.app/" target="_blank"
          ><i class="fa-solid fa-graduation-cap"></i>Titulos</a
        ><br />
      </section>

    <section>
      <h4>Technologies</h4>
      <br />
      <i class="fab fa-html5"></i> <i class="fab fa-css3"></i>
      <i class="fab fa-js"></i> <i class="fab fa-react"></i>
      <i class="fab fa-sass"></i> <i class="fab fa-node-js"></i>
      <i class="fab fa-webpack"></i> <i class="fas fa-database"></i>
    </section>
  </footer>
`;

  if (idiomaPreferido === 'es') {
    // Contenido en inglés
    document.documentElement.lang = 'es';
  } else {
    // Contenido en español
    document.documentElement.lang = 'en';
    document.body.innerHTML = contenidoIngles;
  }
}


window.addEventListener("DOMContentLoaded", () => {
  detectarIdiomaNavegador();

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