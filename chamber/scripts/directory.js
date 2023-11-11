const infoURL = "https://axtonhatch.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector(".cards");
const btnGrid = document.querySelector("#grid-cards");
const btnList = document.querySelector("#list-cards");

async function getDirectory(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayDirectoryInfo(data.members);
    }
}

const displayDirectoryInfo = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        const memberName = document.createElement("h2");
        const address = document.createElement("h3");
        const phoneNumber = document.createElement("p");
        const websiteURL = document.createElement("a");
        const logoContainer = document.createElement("div")
        const memberLogo = document.createElement("object");

        memberName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phoneNumber.textContent = `${member.phoneNumber}`;
    
        websiteURL.setAttribute("href", member.websiteURL);
        websiteURL.textContent = `${member.websiteURL}`;

        memberLogo.setAttribute("data", member.imageFileName);
        logoContainer.setAttribute("class", "logo-card");
        logoContainer.appendChild(memberLogo);

        card.setAttribute("class", "card");
        card.append(logoContainer, memberName, address, phoneNumber, websiteURL);

        cards.appendChild(card);
    });
}

btnGrid.addEventListener("click", () => {
    cards.classList.add("cards");
    cards.classList.remove("list");
    const gridCards = document.querySelectorAll(".cards > section");
    gridCards.forEach((gridCard) => {
        gridCard.classList.add("card");
    });
});

btnList.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("cards");
    const gridCards = document.querySelectorAll(".card");
    gridCards.forEach(gridCard => {
        gridCard.classList.remove("card");
    });
});


getDirectory(infoURL);