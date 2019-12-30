import { API_URL } from './config.js'
import { toJSON } from './utils.js'

console.log(API_URL)
export const getAlbum = (id) =>
    fetch(`${API_URL}/albums/${id}`)
        .then(toJSON)

export const getAlbums = (ids) => {
    fetch(`${API_URL}/albums/?ids=${ids}`)
        .then(toJSON)
}

export const getAlbumTrack = (id) =>
    fetch(`${API_URL}/albums/${id}/tracks`)
    .then(toJSON)