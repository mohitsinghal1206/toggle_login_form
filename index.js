const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Function to check if all fields are filled
function areFieldsFilled(form) {
    const inputs = form.querySelectorAll('input');
    for (let input of inputs) {
        if (input.value.trim() === '') {
            return false;
        }
    }
    return true;
}

// Handle sign-up form submission
document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission
    if (areFieldsFilled(this)) {
        window.location.href = 'https://mohitsinghal1206.github.io/mini_project5_music_website/';  // Redirect to the link
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// Handle sign-in form submission
document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission
    if (areFieldsFilled(this)) {
        window.location.href = 'https://mohitsinghal1206.github.io/mini_project5_music_website/';  // Redirect to the link
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// Simulate social media login
function simulateSocialLogin(platform) {
    alert(`Login in with ${platform}`);
    // Example for sign-in form:
    document.getElementById('signInEmail').value = `user@${platform.toLowerCase()}.com`;
    document.getElementById('signInPassword').value = 'password123';
    // Optionally auto-submit the form after simulating the login
    document.getElementById('signInForm').dispatchEvent(new Event('submit'));
}

// Toggle between forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
