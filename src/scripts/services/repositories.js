import { baseURL, repositoriesQuantity } from "../variables.js"

async function getRepositories(username) {
    const response = await fetch(`${baseURL}${username}/repos?per_page=${repositoriesQuantity}`)
    const responseJSON = await response.json()
    return responseJSON
}

export { getRepositories }