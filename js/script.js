// --------------MOSTRAR MENU DEL NAVBAR------------------
const navMenu = document.getElementById("nav-menu");
const navToggler = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Muestro el menu
if (navToggler) {
    navToggler.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

// Cierro el menu
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

//--------------CERRAR MENU DEL NAVBAR (Al clickear en algun link)------------------
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// Agregar blur en el navbar al hacer scroll

const blurHeader = () => {
    const header = document.getElementById("header");
    // Aplica la clase cuando el scroll supera el 50 del vh
    this.scrollY >= 50 ? header.classList.add("blur-header")
        : geader.classList.remove("blur-header");
}
window.addEventListener("scroll", blurHeader);

// Email JS 
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_bsaymvk", "template_at8x6xl", "#contact-form", "KNgchvOtsG3V666v1")
        .then(() => {
            // Mostrar mensaje
            contactMessage.textContent = "Mensaje enviado exitosamente 👌"
            // Quitar el mensaje despues de 5 seg
            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)
            // Vaciar los inputs despues de ser ingresados con exito
            contactForm.reset()
        }, () => {
            // Mostrar mensaje de error
            contactMessage.textContent = "Mensaje no enviado (Error en el Servicio) ❌"
        })
}

contactForm.addEventListener("submit", sendEmail)

// Mostrar flecha scroll arriba

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

// Mostrar el link activo del navbar cuando se hace scroll
// Guardo todas las <section> que tengan un id
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        // Obtengo la posicion del offset Top de la seccion actual y le resto el height del navbar
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute("id")
        // Obtengo el link del nav menu vinculado con la seccion en pantalla
        const sectionsClass = document.querySelector(".nav-menu a[href*=" + sectionId + "]")

        // Si el borde superior de la ventana llega al offset top de la seccion y no llega al final de la seccion, se activa el link vinculado
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link")
        } else {
            sectionsClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)


// Animacion scroll reveal

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1000,
    delay: 50,
    // reset: true 
})

sr.reveal(`.home-data, .home-social, .contact-container, .footer-container`)
sr.reveal(`.home-image`, { origin: "bottom" })
sr.reveal(`.about-data, .skills-data`, { origin: "left" })
sr.reveal(`.about-image, .skills-content`, { origin: "right" })
sr.reveal(`.services-card, .projects-card`, { interval: 100 })


// Desplegar Descripcion de Proyecto

const proyectos = document.querySelectorAll(".projects-card");

proyectos.forEach(proyecto => {
    const botonProyecto = proyecto.querySelector(".projects-collapse");
    const textoBoton = proyecto.querySelector(".projects-button");
    const iconoBoton = proyecto.querySelector(".projects-button-icon");
    const descripcionProyecto = proyecto.querySelector(".projects-description");

    botonProyecto.addEventListener("click", () => {
        descripcionProyecto.classList.toggle("show");
        if(descripcionProyecto.classList.contains("show")){
            textoBoton.textContent = "Cerrar";
            iconoBoton.classList.remove("ri-arrow-down-s-fill");
            iconoBoton.classList.add("ri-arrow-up-s-fill");
        }else{
            textoBoton.textContent = "Ver Más";
            iconoBoton.classList.remove("ri-arrow-up-s-fill");
            iconoBoton.classList.add("ri-arrow-down-s-fill");
        }
    });
});


