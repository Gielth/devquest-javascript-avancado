import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { getEvents } from "./services/events.js"

async function getUserData(username){
    
    const userResponse = await getUser(username)

    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    const reposResponse = await getRepositories(username)
    const eventsResponse = await getEvents(username)

    user.setInfo(userResponse)
    user.setRepos(reposResponse)
    user.setEvents(eventsResponse)

    console.log(user.events)
    screen.renderUser(user)

}

function validateEmptyInput(username) {
    if(username.length === 0) {
        alert('preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

document.getElementById('btn-search').addEventListener('click', () => {
    const username = document.getElementById('input-search').value
    if(validateEmptyInput(username)) return
    getUserData(username);
})

document.getElementById('input-search').addEventListener('keyup', (event) => {
    const username = event.target.value
    const key = event.which || event.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(validateEmptyInput(username)) return
        getUserData(username)
    }
})
