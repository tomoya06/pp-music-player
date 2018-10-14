import musicAPI from 'music-api'

const host = 'http://localhost:8001'

const limit = 20
const raw = true

function musicPromise(type, source, key, page) {
  return new Promise((resolve, reject) => {
    fetch(`${host}/api/search/${type}/${source}?key=${key}&page=${page}&limit=${limit}`)
    .then((response) => response.json())
    .then((json) => { 
      console.log(json); 
      if (!json.success) {
        throw new Error(`[musicapi] ${json.message}`)
      }
      return resolve(json);
     })
    .catch((error) => { 
      return reject(error.message)
    })
  })
}

export const searchSongs = function (source, key, page) {
  return musicPromise('song', source, key, page)
}

export const searchAlbums = function (source, key, page) {
  return musicPromise('album', source, key, page)
}
