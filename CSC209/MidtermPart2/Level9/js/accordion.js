
const NRIMAGES = 4;

const images = [
    { src: "../images/spring.jpg", name: "Spring" },
    { src: "../images/summer.jpg", name: "Summer" },
    { src: "../images/fall.jpg", name: "Fall" },
    { src: "../images/winter.jpg", name: "Winter" }
];


function createAccordion() {
    const container = document.getElementById("accordion-container");

    for (let i = 0; i < NRIMAGES; i++) {
        const button = document.createElement("button");
        button.className = "accordion";
        button.textContent = `Section ${i + 1}`;
        button.addEventListener("click", toggleFunction);

        const panel = document.createElement("div");
        panel.className = "panel";

        const link = document.createElement("a");
        link.href = images[i].src;
        link.download = `${images[i].name}.jpg`;
        link.textContent = `Download Image ${i + 1}`;

        panel.appendChild(link);
        container.appendChild(button);
        container.appendChild(panel);
    }
}

function toggleFunction() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
}

createAccordion();
