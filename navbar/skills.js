document.querySelectorAll("#circle").forEach(circle => {
    const percentage = parseInt(circle.querySelector("span").textContent);
    circle.style.setProperty("--percentage", percentage);
});
