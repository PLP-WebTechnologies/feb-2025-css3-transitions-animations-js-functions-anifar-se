// Function to store user preference
function savePreference() {
    const color = document.body.style.backgroundColor;
    localStorage.setItem("bgColor", color);
}

// Function to retrieve and apply stored preference
function applyPreference() {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
}

// Call function on page load
window.onload = applyPreference;
