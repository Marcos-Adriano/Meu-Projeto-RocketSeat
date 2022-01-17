const LinksSocialMedia = {
    github : 'Marcos-Adriano',
    youtube : "channel/UCIlq6eea1yv6YBoWD-zJKDw",
    facebook : "marcosdevgoncalves",
    instagram : 'marcosdevgoncalves',
    twitter : "jakelinytec"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        
    }
}

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.src = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}
changeSocialMediaLinks()
getGitHubProfileInfos()