
console.log("JS körs!");

// Kod för text-box i Contact me-section.
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
}

// Funktion: föregående slide
function prevTestimonial() {
    testimonialIndex = (testimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
    showTestimonialSlide(testimonialIndex);
}

// Auto‑rotation (var 6:e sekund)
setInterval(nextTestimonial, 6000);

// Navigation‑knappar
const nextBtn = document.querySelector(".testimonial-next");
const prevBtn = document.querySelector(".testimonial-prev");

if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextTestimonial);
    prevBtn.addEventListener("click", prevTestimonial);
}

// Visa första slide direkt
showTestimonialSlide(testimonialIndex);

// ===============================
// Pagination dots
// ===============================

const dotsContainer = document.querySelector(".testimonial-dots");

// Skapa en dot för varje slide
testimonialSlides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("testimonial-dot");
    dot.addEventListener("click", () => {
        testimonialIndex = index;
        showTestimonialSlide(testimonialIndex);
        updateDots();
    });
    dotsContainer.appendChild(dot);
});

// Uppdatera dots när slide ändras
function updateDots() {
    const dots = document.querySelectorAll(".testimonial-dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[testimonialIndex].classList.add("active");
}

// Kör en gång vid start
updateDots();


// ===============================
// Swipe på mobil
// ===============================

let startX = 0;

document.querySelector(".testimonial-slideshow").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector(".testimonial-slideshow").addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        nextTestimonial(); // swipe vänster → nästa
    } else if (endX - startX > 50) {
        prevTestimonial(); // swipe höger → föregående
    }
});

let autoSlide = setInterval(nextTestimonial, 6000);

const slideshow = document.querySelector(".testimonial-slideshow");

slideshow.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

slideshow.addEventListener("mouseleave", () => {
    autoSlide = setInterval(nextTestimonial, 6000);
});

