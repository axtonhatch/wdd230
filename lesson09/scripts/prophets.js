const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2')
        let portrait = document.createElement("img")
        let birth = document.createElement("p")
        let place = document.createElement("p")
        fullName.textContent = `${prophet.name}`
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`)
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        birth.textContent = `Date of birth: ${prophet.birthdate}`;
        place.textContent = `Place of birth: ${prophet.birthplace}`;
        place.setAttribute("class", "place")

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(birth);
        card.appendChild(place)
        
        // Add to DOM
        card.appendChild(portrait);
        cards.appendChild(card);

    })
}
async function getProphetData() {
    const response = await fetch(url)
    const data = await response.json()
    // console.table(data.prophets)
    displayProphets(data.prophets)
}

getProphetData();