import { baseURL, repositoriesQuantity } from "../variables.js"

async function getEvents(username) {
    const response = await fetch(`${baseURL}${username}/events?per_page=${repositoriesQuantity}`)
    const responseJSON = await response.json()
    return responseJSON
}

export { getEvents }