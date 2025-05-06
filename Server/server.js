const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();

app.post('.login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http//localhost:5178',
        clientId: '375835348fc543ebb11923c4163a1a88',
        clientSecret: '684a7888f07449499f37d3f2f7387040'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})