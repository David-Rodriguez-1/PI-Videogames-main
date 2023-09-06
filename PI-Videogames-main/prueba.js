const data = [
    {
        id: '1975121c-3ef1-4581-a959-f9dc5197fa8a',
        name: 'Leo Messi',
        description: 'Jugador Argentino, se dice que no es de este planeta',
        platforms: ['PC', 'iOS', 'Android'],
        background_image: null,
        releaseDate: '2023-01-01',
        rating: '3',
        genres: ['Action', 'Indie', 'Adventure']
    },
    {
        id: 'd6b50d6d-5c98-4283-95ae-29543f84e3b7',
        name: 'Dibu Martinez',
        description: 'Arquero de la selección Argentina, no lo mires que te come',
        platforms: ['PC', 'iOS'],
        background_image: null,
        releaseDate: '2022-01-01',
        rating: '3',
        genres: ['Dibu', 'Adventure', 'Martinez']
    },
    {
        id: '8ce91ee9-4013-4500-b857-9c328c39747e',
        name: 'PROBANDO JUEGO 888',
        description: 'Prueba7',
        platforms: ['plataforma4', 'plataforma7'],
        background_image: 'www.imagen10.com',
        releaseDate: '2023-12-12',
        rating: '7',
        genres: ['Racing', 'Action', 'Indie']
    },
    {
        id: 'a85ef7cd-c4b2-4884-b784-fc52cbd2fa0c',
        name: 'VAmos probando otro',
        description: 'Arquero de la selección Argentina, no lo mires que te come',
        platforms: ['PC', 'iOS', 'Android'],
        background_image:
            'https://fotos.perfil.com/2022/12/20/trim/720/410/messi-1476916.jpg?webp',
        releaseDate: '2023-01-01',
        rating: '5',
        genres: ['Action', 'Indie', 'Adventure']
    },
    {
        id: 'ec267611-6bfa-4fa8-8d1d-074a4e5f6b93',
        name: 'Fideo Di María',
        description:
            'Jugador que rompió la racha de goles en finales y nos dio la copa del mundo N°3',
        platforms: ['iOS', 'PC', 'Android'],
        background_image:
            'https://img.asmedia.epimg.net/resizer/S6q6zWPLzY6NheUdbKqGnnRziek=/736x414/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/4RS6D4QX2EIIHHX3G7QJE7ZRSY.jpg',
        releaseDate: '2023-01-01',
        rating: '3',
        genres: ['Action', 'Indie', 'Adventure']
    },
    {
        id: '37f80c2f-2e0b-414b-b558-295c4cabb060',
        name: 'Dibu Martinez',
        description: 'Arquero de la selección Argentina, no lo mires que te come',
        platforms: [],
        background_image: null,
        releaseDate: '2022-01-01',
        rating: '3',
        genres: []
    },
    {
        id: 'e0a970c5-40a6-41bd-96d4-3e0132655d44',
        name: 'David Rodriguez',
        description:
            'Este es un juego de prueba para el proyecto individual de SoyHenry',
        platforms: ['PC', 'iOS', 'Android'],
        background_image: null,
        releaseDate: '2023-01-01',
        rating: '3',
        genres: []
    },
    {
        id: 3498,
        name: 'Grand Theft Auto V',
        background_image:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        platforms: Array(7)[
            'PlayStation 5', 'Xbox Series S/X', 'PC', 'PlayStation 4', 'PlayStation 3',
            'Xbox 360', 'Xbox One'
        ],
        rating: 4.47,
        genres: ['Action', 'Adventure']
    },
    {
        id: 3328,
        name: 'The Witcher 3: Wild Hunt',
        background_image:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        platforms: Array(6)[
            'Xbox Series S/X', 'PlayStation 4', 'Nintendo Switch', 'PC', 'Xbox One', 'PlayStation 5'
        ],
        rating: 4.66,
        genres: ['Action', 'Dibu', 'RPG']
    }
]
const genres2 = data.map(g=>g.genres)
genres2
let data2 = [...data.filter(game => game.genres.includes("Martinez", "Dibu"))]
console.log(data2);