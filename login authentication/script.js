document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        document.getElementById("loginForm").reset();
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("securedPage").classList.remove("hidden");
    } else {
        alert("Invalid username or password.");
    }
});
