import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main'

describe('Spotify Wrapper', () => {
  describe('Smoke tests', () => {
    it('Should exist the SEARCH method', () => {
      expect(search).to.exist
    })

    it('Should exist the searchALBUMS method', () => {
      expect(searchAlbums).to.exist
    })
    
    it('Should exist the searchARTISTS method', () => {
      expect(searchArtists).to.exist
    })

    it('Should exist the searchTRACKS method', () => {
      expect(searchTracks).to.exist
    })

    it('Should exist the searchPLAYLISTS method', () => {
      expect(searchPlaylists).to.exist
    })

  })

  describe('Generic Search', () => {
    it('Should call FETCH function', () => {
      const fetchedStud = sinon.stub(global, 'fetch')
      const artist = search()

      expect(fetchedStud).to.have.been.calledOnce
    })

    it('Should receive the correct url to fetch', () => {
      
    })
  })
})