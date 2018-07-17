const images = [
    {
        src: '/images/ProjectImages/Images_StellarFortune/sf_topglass.jpg',
        description: 'I created this piece out of art from the rest of the game. Since we work in Illustrator it was a piece of cake to size the characters up; all that I had to do was add a little more detail here and there so they didn\'t look too simple at this size',
        alt: 'Steller Fortune top glass',
        size: 'gallery-item-width-4'
    },
    {
        src: '/images/ProjectImages/Images_StellarFortune/sf_fs_vwildbonus.jpg',
        description: 'This image shows the playscreen in one of 3 bonus modes. I designed this bonus theme and the robot concurrently, making sure they both evoked thoughts of teleportation',
        alt: 'Playscreen, robot wild edition',
        size: 'gallery-item-width-4'
    },
    {
        src: '/images/ProjectImages/Images_StellarFortune/SamWilliamsArtTest_FixUp.jpg',
        description: 'This was my art test to begin work at Global Gaming Group (G3). I went for bold colors and a retro space-pirate theme to show I could create a marketable and fun slot aesthetic',
        alt: '"Star Bucks" Logo / Inspiration for Stellar Fortune',
        size: 'gallery-item-width-2'
    },
    {
        src: '/images/ProjectImages/Images_StellarFortune/sf_2ndscreenbonus.jpg',
        description: 'This bonus took a lot of time and care. I designed a full body for Stella from the partial body I\'d made for her symbol and made 3D rotating planets for the player to choose in After Effects using Trapcode plugins',
        alt: 'Stellar Fortune second-screen pirate treasure bonus',
        size: 'gallery-item-width-2'
    },
    {
        src: '/images/ProjectImages/Images_StellarFortune/SF_Syms.jpg',
        description: 'These are all of the symbols in Stellar Fortune. I designed them carefully to have a gradient of importance from top left to bottom right, using many attributes to make the higher-paying symbols stand out more',
        alt: 'Stellar Fortune symbols',
        size: 'gallery-item-width-2'
    }
]

const populateImages = (array, location) => {
    const parent = document.querySelector(location)
    array.forEach((image) => {
        const container = document.createElement('div')
        const subContainer = document.createElement('div')
        const img = document.createElement('img')
        const description = document.createElement('p')

        container.classList.add('gallery-item')
        container.classList.add(`${image.size}`)
        subContainer.classList.add('gallery-img')
        img.classList.add('zoomable')
        img.setAttribute('src', `${image.src}`)
        img.setAttribute('alt', `${image.alt}`)

        description.textContent = image.description

        subContainer.appendChild(img)
        container.appendChild(subContainer)
        parent.appendChild(container)
    });
}

if (window.location.pathname === 'localhost:3000/projects/stellar-fortune')
    populateImages(images, '#final-art')