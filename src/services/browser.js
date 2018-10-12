import musicAPI from 'music-api'

const host = 'http://localhost:8001'

const limit = 20
const all = 'xiami'
const raw = true

export const searchSongs = function (key, page) {
  return new Promise((resolve, reject) => {
    fetch(`${host}/api/search/song/all?key=${key}&page=${page}&limit=${limit}`)
      .then((response) => response.json())
      .then((json) => { console.log(json); return resolve(json) })
      .catch((error) => { console.warn(error); return reject(error) })
  })
}

export const searchAlbums = function (key, page) {
  const searchResult = musicAPI.searchAlbum(all, {
    key,
    limit,
    page,
    raw
  })
  console.log(searchResult)
  return searchResult
}
