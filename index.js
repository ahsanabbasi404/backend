require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000;
const githubinfo = {
    "login": "ahsanabbasi404",
    "id": 155879791,
    "node_id": "U_kgDOCUqJbw",
    "avatar_url": "https://avatars.githubusercontent.com/u/155879791?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ahsanabbasi404",
    "html_url": "https://github.com/ahsanabbasi404",
    "followers_url": "https://api.github.com/users/ahsanabbasi404/followers",
    "following_url": "https://api.github.com/users/ahsanabbasi404/following{/other_user}",
    "gists_url": "https://api.github.com/users/ahsanabbasi404/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ahsanabbasi404/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ahsanabbasi404/subscriptions",
    "organizations_url": "https://api.github.com/users/ahsanabbasi404/orgs",
    "repos_url": "https://api.github.com/users/ahsanabbasi404/repos",
    "events_url": "https://api.github.com/users/ahsanabbasi404/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ahsanabbasi404/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-01-07T09:03:02Z",
    "updated_at": "2024-04-04T09:45:39Z"
  };
app.get('/', (req, res) => {
  res.send('Hi!');
})
app.get('/signout', (req, res) => {
    res.send('<h1>HIIIIIIIIIIII</hi>')
}) 
app.get('/login', (req, res) => {
    res.send('Welcome to login page!');
})
app.get('/github', (req, res) => {
    res.json(githubinfo);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})