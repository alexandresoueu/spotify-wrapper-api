global.fetch = require('node-fetch')

import { searchAlbums } from '../src/search.js'

const albums = searchAlbums('Incubus')

albums.then(data => data.albums.items.map(item => console.log(item.name)))