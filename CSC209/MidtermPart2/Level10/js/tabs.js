const NRTABS = 4; 

const tabs = [
    { name: "London", content: "London is the capital city of England." },
    { name: "Paris", content: "Paris is the capital of France." },
    { name: "Tokyo", content: "Tokyo is the capital of Japan." },
    { name: "New York", content: "New York is a major city in the USA." } 
];

function createTabs() {
    const tabContainer = document.createElement("div");
    tabContainer.className = "tab";
    document.body.appendChild(tabContainer);

    const contentContainer = document.createElement("div");

    for (let i = 0; i < NRTABS; i++) {
        const button = document.createElement("button");
        button.className = "tablinks";
        button.textContent = tabs[i].name;
        button.onclick = (event) => openTab(event, tabs[i].name);
        tabContainer.appendChild(button);

        const contentDiv = document.createElement("div");
        contentDiv.id = tabs[i].name;
        contentDiv.className = "tabcontent";
        contentDiv.innerHTML = `<h3>${tabs[i].name}</h3><p>${tabs[i].content}</p>`;
        contentContainer.appendChild(contentDiv);
    }
    document.body.appendChild(contentContainer);

    document.querySelector(".tablinks").click();
}

function openTab(evt, cityName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let content of tabcontent) {
        content.style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let link of tablinks) {
        link.className = link.className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

createTabs();
