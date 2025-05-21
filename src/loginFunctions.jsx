const requestAuthorization = async() => {

    // Code Verifier 
    const generateRandomString = (length) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = crypto.getRandomValues(new Uint8Array(length));
        return values.reduce((acc, x) => acc + possible[x % possible.length], "");
    }

    const codeVerifier  = generateRandomString(64);

    // Code Challenge

    const sha256 = async (plain) => {
        const encoder = new TextEncoder()
        const data = encoder.encode(plain)
        return window.crypto.subtle.digest('SHA-256', data)
    }

    const base64encode = (input) => {
        return btoa(String.fromCharCode(...new Uint8Array(input)))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    }
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);

    // Authorization Request

    const clientId = '375835348fc543ebb11923c4163a1a88';
    const redirectUri = 'http://127.0.0.1:5178';

    const scope = 'user-read-private user-read-email';
    const authUrl = new URL("https://accounts.spotify.com/authorize")

    // generated in the previous step
    window.localStorage.setItem('code_verifier', codeVerifier);

    const params =  {
        response_type: 'code',
        client_id: clientId,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
    }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
};

// Request Token

const getToken = async code => {

    // stored in the previous step
    const codeVerifier = localStorage.getItem('code_verifier');

    const url = "https://accounts.spotify.com/api/token";
    const payload = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
        }),
    }

    const body = await fetch(url, payload);
    const response = await body.json();

    localStorage.setItem('access_token', response.access_token);
}


// working implicit

async function getSpotifyToken() {
  const clientId = ""; // Replace with your Client ID
  const clientSecret = ""; // Replace with your Client Secret

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  const data = await response.json();
  console.log(data.access_token)
  
  return data.access_token; // Returns the access token
  
}


  //this gets the data from the search word to make a tracklist
  async function GetArtistData(input) {
    try {
      const accessToken = await getSpotifyToken(); // Get token first

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${input}&type=track&include_external=audio`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();
      setTracks(data);
    } catch (error) {
      console.error("Error fetching artist data:", error);
    }
  }