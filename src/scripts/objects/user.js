const user = {
    avatarURL: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser) {
        this.avatarURL = gitHubUser.avatar_url 
        this.name = gitHubUser.name 
        this.bio = gitHubUser.bio 
        this.userName = gitHubUser.login 
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepos(gitHubUserRepos) {
        this.repositories = gitHubUserRepos;
    },
    setEvents(gitHubUserEvents){
        this.events = gitHubUserEvents
    }
}

export { user };