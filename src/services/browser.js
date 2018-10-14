const host = 'http://localhost:3000'

function convertTypeNumber(_type) {
  switch (_type) {
    case 'song': return 1;
    case 'album': return 10;
    case 'artist': return 100;
    case 'playlist': return 1000;
  }
}

export const searchService = function(type, key, page, limit = 20) {
  const typeNo = convertTypeNumber(type)
  return new Promise((resolve, reject) => {
    fetch(`${host}/search?keywords=${key}&limit=${limit}&offset=${page}&type=${typeNo}`)
    .then((response) => response.json())
    .then((json) => { 
      console.log(json); 
      if (json.code !== 200) {
        throw new Error(`[musicapi] ${json.result}`)
      }
      return resolve(json);
    })
    .catch((error) => { 
      console.warn(error)
      return reject(error.message)
    })
  })
}