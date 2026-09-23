
// ===============================
// CONTACT ME - Kod för text-box (i Contact me-section)
// ===============================

let usersCommunication;
document.getElementById("text-box-submit").onclick = function(){
    // Hämta värdet från input-fältet
    usersCommunication = document.getElementById("text-box").value;
    // Logga värdet, inte en sträng
    console.log(usersCommunication);

    document.getElementById("output").textContent = usersCommunication;

    document.getElementById("text-box-h2").textContent = `Din kommunikation: ${usersCommunication}`;
}

// #####################################################################

{/* <h2 id="text-box-h2">Kommunicera med mig!</h2>

                <label>Vad vill du förmedla? </label>
                
                <input id="text-box">
                <button id="text-box-submit">Submit</button>
                <p id="output"> </p> */}


// ===============================
// TESTIMONIALS SLIDESHOW
// ===============================

// Hämta alla slides
const testimonialSlides = document.querySelectorAll(".testimonial-slide");

// Index för aktuell slide
let testimonialIndex = 0;

// Funktion: visa en specifik slide
function showTestimonialSlide(n) {
    testimonialSlides.forEach(slide => slide.classList.remove("active"));
    testimonialSlides[n].classList.add("active");
}

// Funktion: nästa slide
function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
    showTestimonialSlide(testimonialIndex);
    updateTestimonialDots();
}

// Funktion: föregående slide
function prevTestimonial() {
    testimonialIndex = (testimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
    showTestimonialSlide(testimonialIndex);
    updateTestimonialDots();
}

// Visa första slide direkt
showTestimonialSlide(testimonialIndex);

// ===============================
// TESTIMONIALS - Pagination dots
// ===============================

const testimonialDotsContainer = document.querySelector(".testimonial-dots");

// Skapa en dot för varje slide
testimonialSlides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("testimonial-dot");
    dot.addEventListener("click", () => {
        testimonialIndex = index;
        showTestimonialSlide(testimonialIndex);
        updateTestimonialDots();
    });
    testimonialDotsContainer.appendChild(dot);
});

// Uppdatera dots när slide ändras
function updateTestimonialDots() {
    const dots = document.querySelectorAll(".testimonial-dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[testimonialIndex].classList.add("active");
}

// Kör en gång vid start
updateTestimonialDots();

// ===============================
// Testimonials - Swipe på mobil
// ===============================

let testimonialStartX = 0;

document.querySelector(".testimonial-slideshow").addEventListener("touchstart", (e) => {
    testimonialStartX = e.touches[0].clientX;
});

document.querySelector(".testimonial-slideshow").addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;

    if (testimonialStartX - endX > 50) {
        nextTestimonial(); // swipe vänster → nästa
    } else if (endX - testimonialStartX > 50) {
        prevTestimonial(); // swipe höger → föregående
    }
});


// ===============================
// TESTIMONIALS — Auto‑rotation (var 6:e sekund)
// ===============================

let testimonialAutoSlide = setInterval(nextTestimonial, 6000);

// ===============================
// TESTIMONIALS — Hover pause
// ===============================

const testimonialSlideshow = document.querySelector(".testimonial-slideshow");

testimonialSlideshow.addEventListener("mouseenter", () => {
    clearInterval(testimonialAutoSlide);
});

testimonialSlideshow.addEventListener("mouseleave", () => {
    testimonialAutoSlide = setInterval(nextTestimonial, 6000);
});

















// ===============================
// PROJECTS SLIDESHOW
// ===============================

// Hämta alla slides
const projectsSlides = document.querySelectorAll(".project-slide");

// Index för aktuell slide
let projectIndex = 0;

// Funktion: visa en specifik slide
function showProjectSlide(n) {
    projectsSlides.forEach(slide => slide.classList.remove("active"));
    projectsSlides[n].classList.add("active");
}

// Funktion: nästa slide
function nextProject() {
    projectIndex = (projectIndex + 1) % projectsSlides.length;
    showProjectSlide(projectIndex);
    updateProjectDots();
}

// Funktion: föregående slide
function prevProject() {
    projectIndex = (projectIndex - 1 + projectsSlides.length) % projectsSlides.length;
    showProjectSlide(projectIndex);
    updateProjectDots();
}

// Visa första slide direkt
showProjectSlide(projectIndex);

// ===============================
// PROJECTS — Pagination dots
// ===============================

const projectDotsContainer = document.querySelector(".project-dots");

// Skapa en dot för varje slide
projectsSlides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("project-dot");

    dot.addEventListener("click", () => {
        projectIndex = index;
        showProjectSlide(projectIndex);
        updateProjectDots();
    });

    projectDotsContainer.appendChild(dot);
});

// Uppdatera dots när slide ändras
function updateProjectDots() {
    const dots = document.querySelectorAll(".project-dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[projectIndex].classList.add("active");
}

// Kör en gång vid start
updateProjectDots();

// ===============================
// PROJECTS — Swipe på mobil
// ===============================

let projectStartX = 0;

document.querySelector(".projects-slideshow").addEventListener("touchstart", (e) => {
    projectStartX = e.touches[0].clientX;
});

document.querySelector(".projects-slideshow").addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;

    if (projectStartX - endX > 50) {
        nextProject(); // swipe vänster → nästa
    } else if (endX - projectStartX > 50) {
        prevProject(); // swipe höger → föregående
    }
});

// ===============================
// PROJECTS — Auto-rotation (var 6:e sekund)
// ===============================

let projectAutoSlide = setInterval(nextProject, 6000);

// ===============================
// PROJECTS — Hover pause
// ===============================

const projectsSlideshow = document.querySelector(".projects-slideshow");

projectsSlideshow.addEventListener("mouseenter", () => {
    clearInterval(projectAutoSlide);
});

projectsSlideshow.addEventListener("mouseleave", () => {
    projectAutoSlide = setInterval(nextProject, 6000);
});