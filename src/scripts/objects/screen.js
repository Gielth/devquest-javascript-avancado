const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarURL}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'} <br> @${user.userName}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                            <p>👥 Seguindo: ${user.followers}</p>
                                            <p>👥 Seguidores: ${user.following}</p>
                                        </div>
                                      </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => {
            repositoriesItens += `<li>
                                        <a href="${repo.html_url}" target="_blank">
                                        ${repo.name}
                                        <div class="repo-info">
                                            <p>🍴 ${repo.forks}</p>
                                            <p>⭐ ${repo.stargazers_count}</p>
                                            <p>👀 ${repo.watchers}</p>
                                            <p>💻 ${repo.language ?? '-'}</p>
                                        </div>
                                        </a>
                                  </li>`
        })

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                               <h2>Repositórios</h2>
                                               <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventItens = ''

        user.events.forEach(event => {
            if(event.type === 'PushEvent'){
                eventItens += `<li><h3>${event.repo.name}:</h3> <p>- ${event.payload.commits[0].message ?? 'Não possui mensagem 😥'}</p></li>`
            } else if (event.type === 'CreateEvent'){
                eventItens += `<li><h3>${event.repo.name}:</h3> <p>- ${event.payload.description ?? 'Não possui descrição 😥'}</p></li>`
            }
        })

        if(eventItens !== '') {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                            </div>`
        }

                    
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }