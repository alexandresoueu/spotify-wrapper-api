import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import { search, searchArtists, searchAlbums, searchTracks, searchPlaylists } from '../src/main.js'

describe("API SPOTIFY", () => {
    describe("Smoke tests", () => {
        it("should exist search method", () => {
            expect(search).to.exist
        })

        it("should exist searchArtists method", () => {
            expect(searchArtists).to.exist
        })

        it("should exist searchAlbums method", () => {
            expect(searchAlbums).to.exist
        })

        it("should exist searchTracks method", () => {
            expect(searchTracks).to.exist
        })

        it("should exist searchPlaylists method", () => {
            expect(searchPlaylists).to.exist
        })
    })

    describe("Generic Search", () => {
        it("should call fetch function", () => {
            const fetchedStub = sinon.stub(global, 'fetch')
            const artist = search()

            expect(fetchedStub).to.have.been.calledOnce
        })
    })
})