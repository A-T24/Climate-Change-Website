document.addEventListener('DOMContentLoaded', function () {
    typewriterEffect('typewriter-heading', 'Join the Fight Against Climate Change');
});

function typewriterEffect(elementId, text) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let index = 0;
    element.textContent = ''; // Clear existing text

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 80); // Adjust the typing speed (milliseconds)
        }
    }

    type();
}
    