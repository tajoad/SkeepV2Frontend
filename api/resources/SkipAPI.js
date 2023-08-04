import { APISettings } from '../config.js'

export default {
  index(baseURL, data) {
    return fetch(baseURL + `/${data}`, {
      method: 'GET',
      mode: 'cors',
      headers: APISettings.headers
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error)
        }
        return response.text()
      })
      .then((data) => {
        return data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  indexOnly(URL) {
    return fetch(APISettings.baseURL + URL, {
      method: 'GET',
      mode: 'cors',
      headers: APISettings.headers
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error)
        }
        return response.text()
      })
      .then((data) => {
        return data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  updateData(baseURL, getBody) {
    return fetch(baseURL, {
      method: 'PUT',
      mode: 'cors',
      headers: APISettings.headers,
      body: getBody
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error)
        }
        return response.text()
      })
      .then((data) => {
        return data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getCountries(baseURL) {
    return fetch(baseURL, {
      method: 'GET'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error)
        }
        return response.json()
      })
      .then((data) => {
        return data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  store(URL, data) {
    return fetch(APISettings.baseURL + URL, {
      method: 'POST',
      headers: APISettings.headers,
      mode: 'cors',
      body: data
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error)
        }
        return response.text()
      })
      .then((data) => {
        return data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
