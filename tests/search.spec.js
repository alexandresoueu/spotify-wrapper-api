import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index.js'

describe("Search", () => {
    let spotify
    let fetchedStub
    let promise

    beforeEach(() => {
        spotify = new SpotifyWrapper({
            token: 'foo'
        })
        fetchedStub = sinon.stub(global, 'fetch')
        promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
        fetchedStub.restore()
    })

    describe("Smoke tests", () => {
        it("should exist artists method", () => {
            expect(spotify.search.artists).to.exist
        })

        it("should exist albums method", () => {
            expect(spotify.search.albums).to.exist
        })

        it("should exist tracks method", () => {
            expect(spotify.search.tracks).to.exist
        })

        it("should exist playlists method", () => {
            expect(spotify.search.playlists).to.exist
        })
    })

    describe("Search for artist", () => {
        it("should call fetch function", () => {
            const artists = spotify.search.artists('Incubus')

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fetch", () => {
            const artists = spotify.search.artists('Incubus')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

            const artistsTwo = spotify.search.artists('Soundgarden')
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Soundgarden&type=artist')
        })
    })

    describe("Search for album", () => {
        it("should call fetch function", () => {
            const albums = spotify.search.albums('bush')

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fetch", () => {
            const albums = spotify.search.albums('bush')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=bush&type=album')

            const albumsTwo = spotify.search.albums('soundgarden')
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=soundgarden&type=album')
        })
    })

    describe("Search for track", () => {
        it("should call fetch function", () => {
            const tracks = spotify.search.tracks('limpbizkit')

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fetch", () => {
            const tracks = spotify.search.tracks('limpbizkit')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=limpbizkit&type=track')

            const tracksTwo = spotify.search.tracks('braza')
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=braza&type=track')
        })
    })

    describe("Search for playlist", () => {
        it("should call fetch function", () => {
            const playlists = spotify.search.playlists('braza')

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fetch", () => {
            const playlists = spotify.search.playlists('braza')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=braza&type=playlist')

            const playlistsTwo = spotify.search.playlists('izenzee')
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=izenzee&type=playlist')
        })
    })
})