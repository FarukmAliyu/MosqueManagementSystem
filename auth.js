// Save user credentials and handle login
function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Signup successful!");
  window.location.href = "index.html";
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === username && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
}

function checkAuth() {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please log in first!");
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
