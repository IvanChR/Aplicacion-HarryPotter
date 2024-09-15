const booksBtn = document.querySelector("#books")
const charactersBtn = document.querySelector("#characters")
const housesBtn = document.querySelector("#houses")
const spellsBtn = document.querySelector("#spells")

const appContainer = document.querySelector(".content")
const apiUrl = 'https://potterapi-fedeperin.vercel.app/es/';  // Replace with the actual API endpoint URL
const books = 'books/'
const characters = 'characters/'
const houses = 'houses/'
const spells = 'spells/'


const fetchBooks = async () => {

    appContainer.innerHTML = ""

    const res = await fetch(apiUrl + books)
    const booksFetched = await res.json()

    return booksFetched.forEach(book => {

        const bookcover = book.cover
        const bookNumber = book.number
        const bookTitle = book.title
        const bookOrTitle = book.originalTitle
        const bookPages = book.pages
        const bookDesc = book.description
        const bookRelDate = book.releaseDate

        printBook(bookTitle, bookOrTitle, bookNumber, bookcover, bookPages, bookDesc, bookRelDate)
    });

}

const fetchCharacters = async () => {

    appContainer.innerHTML = ""

    const res = await fetch(apiUrl + characters)
    const charactersFetched = await res.json()

    return charactersFetched.forEach(character => {

        const characterImage = character.image
        const characterName = character.fullName
        const characterNickName = character.nickname
        const characterHouse = character.hogwartsHouse
        const characterActor = character.interpretedBy
        const characterChildren = character.children
        const characterBirth = character.birthdate

        printCharacter(characterName, characterNickName, characterHouse, characterImage, characterActor, characterChildren, characterBirth)
    });

}

const fetchHouses = async () => {

    appContainer.innerHTML = ""

    const res = await fetch(apiUrl + houses)
    const housesFetched = await res.json()

    return housesFetched.forEach(house => {

        const houseEmoji = house.emoji
        const houseAnimal = house.animal
        const houseColors = house.colors
        const houseFounder = house.founder
        const houseHouse = house.house


        printHouse(houseEmoji, houseAnimal, houseColors, houseFounder, houseHouse)
    });

}

const fetchSpells = async () => {

    appContainer.innerHTML = ""

    const res = await fetch(apiUrl + spells)
    const spellsFetched = await res.json()

    return spellsFetched.forEach(spell => {

        const spellName = spell.spell
        const spellUse = spell.use

        printSpell(spellName, spellUse)
    });

}

const printBook = (name, orName, number, image, pages, desc, date) => {

    const book = `
    <div class="item category-book">
        <div class="image-container">
            <img id="${number}" src="${image}" class="image">
        </div>
        <div class="info-container">
            <h4><strong>Libro:</strong> ${number}</h4>
            <h3>${name}</h3>
            <span><strong>En inglés:</strong> ${orName}</span>
            <p><strong>Fecha de Publicación:</strong> ${date}</p>
            <p><strong>Páginas:</strong> ${pages}</p>
            <!--- <p>${desc}</p>--->
        </div>
    </div>
`
    appContainer.insertAdjacentHTML("beforeend", book)

}


const printCharacter = (name, nickname, house, image, actor, children, birthdate) => {

    const char = `
    <div class="item category-character">
        <div class="image-container">
            <img id="${name}" src="${image}" class="image">
        </div>
        <div class="info-container">
            <h3>${name}</h3>
            <span><strong>Apodo:</strong> ${nickname}</span>
            <p><strong>Interpretado por:</strong> ${actor}</p>
            <p><strong>Casa de Hogwarts:</strong> ${house}</p>
            <p><strong>Fecha de nacimiento:</strong> ${birthdate}</p>
            <p><strong>Hijos:</strong> ${children}</p>
        </div>
    </div>
`
    appContainer.insertAdjacentHTML("beforeend", char)

}


const printHouse = (emoji, animal, colors, founder, houseName) => {

    const house = `
    <div class="item category-house">
        <div class="info-container">
            <p>Simbolo: ${emoji}</p>
            <h3>${houseName}</h3>
            <span><strong>Animal:</strong> ${animal}</span>
            <p><strong>Colores:</strong> ${colors}</p>
            <p><strong>Fundador:</strong> ${founder}</p>
        </div>
    </div>
`
    appContainer.insertAdjacentHTML("beforeend", house)

}

const printSpell = (name, use) => {

    const house = `
    <div class="item category-spell">
        <div class="info-container">
            <h3>${name}</h3>
            <span><strong>Uso:</strong> ${use}</span>
        </div>
    </div>
`
    appContainer.insertAdjacentHTML("beforeend", house)

}

booksBtn.addEventListener("click", fetchBooks)
charactersBtn.addEventListener("click", fetchCharacters)
housesBtn.addEventListener("click", fetchHouses)
spellsBtn.addEventListener("click", fetchSpells)
