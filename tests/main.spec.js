import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main'
import { isRegExp } from 'util';

describe('Spotify Wrapper', () => {
  let fetchedStud
  let promise

  beforeEach( () => {
    fetchedStud = sinon.stub(global, 'fetch')
    promise = fetchedStud.returnsPromise()
  })

  afterEach( () => {
    fetchedStud.restore()
  })

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
      const artists = search()

      expect(fetchedStud).to.have.been.calledOnce
    })

    it('Should receive the correct url to fetch', () => {
      context('passing one type', () => {
        const artists = search('Incubus', 'artist')
        expect(fetchedStud).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')
  
        const albums = search('Incubus', 'album')
        expect(fetchedStud).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album') 
      })

      context('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album'])

        expect(fetchedStud).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album')
      })

    })

    it('Should return the JSON Data from the Promise', () => {
      promise.resolves({ body: 'json'})
      const artists = search('Incubus', ' artist')

      expect(artists.resolveValue).to.be.eql({ body: 'json'})
    })
  })

  describe('searchAlbums', () => {
    it('Should call fetch function', () => {
      const albums = searchAlbums('Tupamaru')
      expect(fetchedStud).to.be.have.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const albums = searchAlbums('Tupamaru')

      expect(fetchedStud).to.be.have
        .calledWith('https://api.spotify.com/v1/search?q=Tupamaru&type=album')
      
      const albumx = searchAlbums('Vermelho')

      expect(fetchedStud).to.be.have
          .calledWith('https://api.spotify.com/v1/search?q=Vermelho&type=album')
    })
  })
  
  describe('searchArtists', () => {
    it('Should call fetch function', () => {
      const artists = searchArtists('Zander')
      expect(fetchedStud).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const artists = searchArtists('Zander', 'artist')

      expect(fetchedStud).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Zander&type=artist')

      const artistx = searchArtists('Tchan', 'artist')

      expect(fetchedStud).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Tchan&type=artist')
    })
  })

  describe('searchTracks', () => {
    it('Should call fetch function', () => {
      const tracks = searchTracks('Braza')

      expect(fetchedStud).to.be.have.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const tracks = searchTracks('Braza')

      expect(fetchedStud).to.be.have
        .calledWith('https://api.spotify.com/v1/search?q=Braza&type=tracks')
        
      const trackx = searchTracks('Timbalada')

      expect(fetchedStud).to.be.have
        .calledWith('https://api.spotify.com/v1/search?q=Timbalada&type=tracks')
    })
  })

  describe('searchPlaylists', () => {
    it('Should call fetch function', () => {
      const playlists = searchPlaylists('ACDC')

      expect(fetchedStud).to.be.have.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const playlists = searchPlaylists('ACDC')

      expect(fetchedStud).to.be.have
        .calledWith('https://api.spotify.com/v1/search?q=ACDC&type=playlist')

      const playlistx = searchPlaylists('Araketo')

      expect(fetchedStud).to.be.have
        .calledWith('https://api.spotify.com/v1/search?q=Araketo&type=playlist')
    })
  })
})