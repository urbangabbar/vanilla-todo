window.addEventListener('load', ()=> {
    const loginButton = document.querySelector("#login-submi");
    loginButton.addEventListener('click', handleLogin)
})

function handleLogin(e){
    e.preventDefault()
    const username = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;

    if(validateLogin(username, password)){
        window.location.assign('/app.html')
    }
}

function validateLogin(username, password){
    if(username && password){
        const storedPassword = localStorage.getItem(username);
        if(password === storedPassword){
            return true
        }
        document.querySelector("#liveAlertPlaceholder").innerHTML = `<div class="alert alert-danger" role="alert">
        Invalid username password
      </div>`
    }else{
        document.querySelector("#liveAlertPlaceholder").innerHTML = `<div class="alert alert-danger" role="alert">
        Value of username and password cannot be empty.
      </div>`
    }
    return false;
}
