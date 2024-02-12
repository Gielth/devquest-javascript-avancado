import { baseURL } from "../variables.js"

async function getUser(username) {
    const response = await fetch(`${baseURL}${username}`)
    const responseJSON = await response.json()
    return responseJSON
}

export { getUser }