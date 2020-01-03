import { expect } from 'chai'

import SpotifyWrapper from '../src/index.js'

describe('SpotifyWrapper Library', () => {
    it("should create an instance of SpotifyWrapper", () => {
        let spotify = new SpotifyWrapper({})
        expect(spotify).to.be.an.instanceof(SpotifyWrapper)
    })

    it("should receive apiURL as an option", () => {
        let spotify = new SpotifyWrapper({
            apiURL: 'nemo'
        }) 

        expect(spotify.apiURL).to.be.equal('nemo')
    })

    it("should use the default apiURL if not provided", () => {
        let spotify = new SpotifyWrapper({})
        expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1')
    })

    it('should receive token as an option', () => {
        let spotify = new SpotifyWrapper({
            token: 'foo'
        })

        expect(spotify.token).to.be.equal('foo')
    })
})