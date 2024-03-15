const allowedUsers = {
    "marangu" : "marangu123",
    "h" : "j"
}

const verifyCredentials = () => {
    const form = document.getElementById("login-form")
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (allowedUsers[username] === password) {
        form.action = "/welcome.html"
    } else {
        alert("Wrong username or password")
        form.action = "/login.html"
    }
}