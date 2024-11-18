document.querySelector("form").addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert("All fields are required!");
    }
});
document.querySelector("form").addEventListener("submit", function (e) {
    setTimeout(() => {
        e.target.reset(); // Clears the form after submission
    }, 100); // Ensure the submission completes before reset
});
