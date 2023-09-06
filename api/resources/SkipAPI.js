import { APISettings } from '../config.js'
import axios from 'axios'

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
        return response.text()
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
  },

  sendData(URL, data) {
    axios
      .post(APISettings.baseURL + URL, {
        body: data
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }
}
