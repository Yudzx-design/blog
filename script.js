// Fungsi untuk login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Yudzx" && password === "admin1") {
        document.getElementById("login-container").style.display = "none";
        const downloadContainer = document.getElementById("download-container");
        downloadContainer.style.display = "flex";

        // Tambahkan animasi masuk
        downloadContainer.classList.add("fade-in");
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = "Username atau Password salah!";
    }
}