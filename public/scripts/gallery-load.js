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

// const wtImages = [
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Final/CasinoHostess.jpg", 
//         description: "I was tasked with recreating the two images on the left with a different body and head angle, and adding more facial expressions and poses for this ad-related hostess character", 
//         alt: "Casino Hostess Character", 
//         size: "gallery-item-width-4"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Final/LobbyTiles.jpg", 
//         description: "These lobby tiles served a dual purpose as the ads for each game inside the casino app and the buttons to enter the games", 
//         alt: "Lobby Tiles for Super Sevens and Polar Bowler", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Final/PolarBowler_playscreen.jpg", 
//         description: "I created this playscreen to closely match the alley of the original polar bowler app. PB the polar bear would slam into the pins below the screen and the Strike symbol scoring meter would pop up every time the player won a match with the strike X symbol", 
//         alt: "Polar Bowler Play Screen", 
//         size: "gallery-item-width-4"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Final/PolarBowler_sympage.jpg", 
//         description: "I created all these symbols to read most important to least important starting with PB the polar bear. All symbols were layered for animation and created in Illustrator so they could be exported at large sizes. The wild crate breaks apart and flings 1 - 5 snowballs onto other reels, which also become wild", 
//         alt: "Polar Bowler Symbols", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Final/PolarBowler_freespins.jpg", 
//         description: "I designed the polar bowler free spins screen to look like a typical pins setup with a reverse pyramid of reels. When PB the polar bear lands, he knocks the remaining pin away in a cover-the-reels bonus", 
//         alt: "Polar Bowler Free Spins Screen", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Final/PolarBowler_bonusgame.jpg", 
//         description: "The Polar Bowler second screen bonus was a physics-based bowling minigame in which the player can use skill to win more points by flicking PB the polar bear at the pins down the lane and knocking over as many as they can in three turns", 
//         alt: "Polar Bowler Bonus Screen", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Final/SuperSevens_playscreen.jpg", 
//         description: "", 
//         alt: "Super Sevens Play Screen", 
//         size: "gallery-item-width-4"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Final/PolarBowler_dialogs.jpg", 
//         description: "", 
//         alt: "Polar Bowler Unity Dialogs", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Final/SuperSevens_sympage.jpg", 
//         description: "", 
//         alt: "Super Sevens Symbols", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Dev/PolarBowler_LobbyTile_Dev.jpg", 
//         description: "", 
//         alt: "Polar Bowler Lobby Tile Development", 
//         size: "gallery-item-width-4"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Dev/PolarBowler_Dev_playscreen.jpg", 
//         description: "", 
//         alt: "Polar Bowler Play Screen Development", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Dev/PolarBowler_Sympage_Thumbs.jpg", 
//         description: "", 
//         alt: "Polar Bowler Symbol Thumbnails", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Dev/PolarBowler_SymbolStyle.jpg", 
//         description: "", 
//         alt: "Polar Bowler Symbol Style Development", 
//         size: "gallery-item-width-4"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Dev/PolarBowler_FS_Dev.jpg", 
//         description: "", 
//         alt: "Polar Bowler Free Spins storyboard", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Dev/PolarBowler_Dev_playscreen.jpg", 
//         description: "", 
//         alt: "Polar Bowler Play Screen Development", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Dev/PolarBowler_Dev_Bonus.jpg", 
//         description: "", 
//         alt: "Polar Bowler Bonus Game Storyboard", 
//         size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Dev/SuperSevens_Dev_ReelPlacement.jpg", 
//         description: "", alt: "Super Sevens Play Screen Development", size: "gallery-item-width-2"
//     },
//     {
//         src: "/images/ProjectImages/Images_WildTangentCasino/Dev/SuperSevens_Dev_Symbols.jpg", description: "", alt: "Black and White Super Sevens Symbol Development", size: "gallery-item-width-2"
//     }
// ]

const loadImages = () => {
    const images = document.querySelectorAll('.zoomable')
    const array = []

    images.forEach((item) => {
        let newItem = {
            src: '',
            description: '',
            alt: '',
            size: ''
        }
        newItem.src = item.getAttribute('src')
        newItem.alt = item.getAttribute('alt')
        newItem.description = item.getAttribute('data-description')
        newItem.size = ((item.parentElement).parentElement).classList[1]
        array.push(newItem)
    })
}

const populateImages = (array, location) => {
    const parent = document.querySelector(location)
    array.forEach((image) => {
        const container = document.createElement('div')
        const subContainer = document.createElement('div')
        const img = document.createElement('img')

        container.classList.add('gallery-item')
        container.classList.add(`${image.size}`)
        subContainer.classList.add('gallery-img')
        img.classList.add('zoomable')
        img.setAttribute('src', `${image.src}`)
        img.setAttribute('data-description', `${image.description}`)
        img.setAttribute('alt', `${image.alt}`)

        subContainer.appendChild(img)
        container.appendChild(subContainer)
        parent.appendChild(container)
    });
}

if (window.location.href === 'http://localhost:3000/projects/stellar-fortune')
    populateImages(images, '#final-art')

loadImages()