export function fetchPromise(url, errorHeader='UNKNOWN ERROR') {
  console.log(`[HTTP]: Fetch from ${url} ...`);
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => { 
      if (json.code !== 200) {
        throw new Error(`[${errorHeader}]: ${json.result}`)
      }
      return resolve(json);
    })
    .catch((error) => { 
      console.warn(error)
      return reject(error.message)
    })
  })
}