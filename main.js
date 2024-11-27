// Handle theme toggling
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check if there's a stored theme preference
const savedTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(savedTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
    body.classList.replace(currentTheme, newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference
});

// Handle font size adjustments
const fontSizeLabel = document.getElementById('fontSizeLabel');
const fontSizeBtnDecrease = document.getElementById('decreaseFont');
const fontSizeBtnIncrease = document.getElementById('increaseFont');

// Get the stored font size preference
const savedFontSize = localStorage.getItem('fontSize') || '16';
fontSizeLabel.textContent = savedFontSize;
document.documentElement.style.fontSize = savedFontSize + 'px';  // Apply font size to the root element

// Increase font size
fontSizeBtnIncrease.addEventListener('click', () => {
    let newFontSize = parseInt(fontSizeLabel.textContent) + 1;
    fontSizeLabel.textContent = newFontSize;
    document.documentElement.style.fontSize = newFontSize + 'px';
    localStorage.setItem('fontSize', newFontSize); // Save font size preference
});

// Decrease font size
fontSizeBtnDecrease.addEventListener('click', () => {
    let newFontSize = parseInt(fontSizeLabel.textContent) - 1;
    fontSizeLabel.textContent = newFontSize;
    document.documentElement.style.fontSize = newFontSize + 'px';
    localStorage.setItem('fontSize', newFontSize); // Save font size preference
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // Simulate a delay or event trigger (e.g., after loading screen)
    setTimeout(() => {
        container.classList.add('active'); // Add the active class to start the animation
    }, 500); // Adjust the delay as needed
});

window.addEventListener('load', () => {
    const loadingAnimation = document.getElementById('loadingAnimation');
    const landingPage = document.getElementById('landing-page');

    setTimeout(() => {
        // Add fade-out animation to the loading animation
        loadingAnimation.classList.add('fade-out');

        // Remove the loading animation after it fades out
        setTimeout(() => {
            loadingAnimation.style.display = 'none';
            landingPage.style.display = 'block';

            // Add fade-in animation to the landing page
            landingPage.classList.add('show');
        }, 1000); // Match this to the fadeOut animation duration
    }, 4000); // Delay for the initial loading animation
});
