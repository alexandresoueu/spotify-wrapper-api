import { searchAlbums } from '../src/main';

global.fetch = require('node-fetch');


const album = searchAlbums('Incubus');

album.then(data => console.log(data));
