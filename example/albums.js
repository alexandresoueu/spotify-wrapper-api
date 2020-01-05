global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index.js'

const spotify = new SpotifyWrapper({
    token: 'BQDqSiaV1IbKR1n0jp0hePxTjdXLQ63dm7AEGYEUSpBQ7g2PW8a0u5oGBwQCjwk1Q6cVYyPg8iAyY21x5xIsEYu85pjACqz_cczIJCRqi2SypREza3V0a3byY507slBfrmbsPno1-69Rryifx_gjQFZQGa1AQJZgVL1JHQ'
})

const albums = spotify.search.albums('Incubus')

albums.then(data => data.albums.items.map(item => console.log(item.name)))