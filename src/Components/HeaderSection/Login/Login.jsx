import './Login.css'

function Login() {
    let authorized = false;
    let username = 'Gmach'
    if (authorized) {
        return (
            <>
                <p>Hello {username}</p>
            </>
        )
    } else {
        return (
            <>
                <button className="login-button">Login</button>
            </>
        )
    }
};

export default Login;