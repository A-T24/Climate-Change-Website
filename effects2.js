// script.js

// Function to add a fade-in effect to elements
// function fadeIn(element, duration) {
//     element.style.opacity = 0;
//     let start = null;

//     function animate(timestamp) {
//         if (!start) start = timestamp;
//         const progress = timestamp - start;
//         element.style.opacity = Math.min(progress / duration, 1);

//         if (progress < duration) {
//             requestAnimationFrame(animate);
//         }
//     }

//     requestAnimationFrame(animate);
// }

// Apply fade-in effect to sections when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        fadeIn(section, 1000);
    });
});

// You can add more animations or interactions as needed

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const headerContent = document.querySelector('.header-content');
    const typewriter = document.getElementById('typewriter');

    function resolveTextEffect() {
        // Display the original text first
        typewriter.innerText = "Climate Change Hub";

        // Wait for a short delay before starting the resolving effect
        setTimeout(() => {
            // Split the text into characters
            const characters = typewriter.innerText.split('');

            // Create spans with class "glitch" for each character
            const spans = characters.map(char => `<span class="glitch">${char}</span>`);

            // Set the inner HTML of typewriter to the spans
            typewriter.innerHTML = spans.join('');

            // Add a delay before applying the resolving effect
            setTimeout(() => {
                // Remove the class "glitch" to resolve the text
                const glitchSpans = document.querySelectorAll('.glitch');
                glitchSpans.forEach(span => span.classList.remove('glitch'));
            }, 500); // Adjust the delay as needed
        }, 2000); // Adjust the delay as needed
    }

    // Apply the resolve text effect when the page loads
    resolveTextEffect();
});
