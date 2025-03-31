let slideIndex = 1;
const images = [
    "../images/spring.jpg",
    "../images/summer.jpg",
    "../images/fall.jpg",
    "../images/winter.jpg"
];

const captions = [
    "Spring",
    "Summer",
    "Fall",
    "Winter"
];
// Initialize slideshow
function initializeSlideshow() {
    const container = document.getElementById("slideContainer");
    const dotContainer = document.getElementById("dotContainer");
    
    // Create slides using for loop
    for (let i = 0; i < images.length; i++) {
        const slideDiv = document.createElement("div");
        slideDiv.className = "mySlides fade";
        
        const numberDiv = document.createElement("div");
        numberDiv.className = "numbertext";
        numberDiv.textContent = `${i + 1} / ${images.length}`;
        
        const img = document.createElement("img");
        img.src = images[i];
        img.style.width = "100%";
        
        const textDiv = document.createElement("div");
        textDiv.className = "text";
        textDiv.textContent = captions[i];
        
        slideDiv.appendChild(numberDiv);
        slideDiv.appendChild(img);
        slideDiv.appendChild(textDiv);
        
        // Insert before navigation buttons
        container.insertBefore(slideDiv, container.firstChild);
        
        // Create dots using for loop
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = function() { currentSlide(i + 1); };
        dotContainer.appendChild(dot);
    }
    
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}