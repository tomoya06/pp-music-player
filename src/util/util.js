export function fetchPromise (url, errorHeader = 'UNKNOWN ERROR') {
  console.log(`[HTTP]: Fetch from ${url} ...`)
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.code !== 200) {
          throw new Error(`[${errorHeader}]: ${json}`)
        }
        return resolve(json)
      })
      .catch((error) => {
        console.warn(error)
        return reject(error.message)
      })
  })
}


export function postPromise(url, body, method = "POST", errorHeader = "UNKNOWN ERROR") {
  console.log(`[HTTP]: ${method} to ${url} ...`);

  console.log(body);

  const formData = new FormData();
  formData.append('json', JSON.stringify(body))

  const fetchConfig = {
    method,
    body: formData,
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  }

  return new Promise((resolve, reject) => {
    fetch(url, fetchConfig)
      .then((response) => response.json())
      .then((json) => {
        if (json.code !== 200) {
          throw new Error(`[${errorHeader}]: ${json.message}`)
        }
        return resolve(json)
      })
      .catch((error) => {
        console.warn(error)
        return reject(error.message)
      })
  })
}