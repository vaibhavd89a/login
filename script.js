document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Dummy login credentials (for example purposes)
    const validUsername = "miracle";
    const validPassword = "academy123";

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // Redirect or navigate to a different page
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});
