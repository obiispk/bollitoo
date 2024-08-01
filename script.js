function checkPassword() {
    const correctPassword = "060922"; // Aquí defines la contraseña correcta
    const inputPassword = document.getElementById("passwordInput").value;
    const errorMsg = document.getElementById("errorMsg");
    const loginContainer = document.getElementById("loginContainer");
    const contentContainer = document.getElementById("contentContainer");

    if (inputPassword === correctPassword) {
        loginContainer.style.display = "none";
        contentContainer.style.display = "block";
    } else {
        errorMsg.textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
    }
}