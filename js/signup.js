// validate username to be unique and username and password should be more than 4 characters
window.addEventListener("load", () => {
  document
    .querySelector("#signup-submit")
    .addEventListener("click", handleSubmit);
});

function handleSubmit(e) {
  // to avoid reloading
  e.preventDefault();
  const username = document.querySelector("#exampleInputEmail1").value;
  const password = document.querySelector("#exampleInputPassword1").value;
  if (validateCredentials(username, password)) {
    createNewUser(username, password);
  }else{
    document.querySelector("#liveAlertPlaceholder").innerHTML = `<div class="alert alert-danger" role="alert">
    Please check username password they should be greater than 4 characters and unique.
  </div>`
  }
}

function createNewUser(username, password) {
  localStorage.setItem(username, password);
  localStorage.setItem("active-session", username)
  window.location.assign("./app.html");
}

function validateCredentials(username, password) {
  if (!(username.length > 4 && password.length > 4)) {
    return false;
  }
  if(localStorage.getItem(username)){
    return false
  }
  return true;
}
