const textArray = ["Welcome to my Portfolio!", "I am a MERN developer.", "I love coding in Python,c, and JavaScript.", "Let's build something amazing!"];
let index = 0;

function typeText() {
    const animatedText = document.getElementById("animated-text");
    animatedText.textContent = ""; // Clear previous text

    const currentText = textArray[index].split("");
    
    currentText.forEach((letter, i) => {
        setTimeout(() => {
            animatedText.textContent += letter; // Add each letter with a delay
        }, 100 * i); // Adjust the speed by changing the multiplier
    });

    index = (index + 1) % textArray.length; // Loop through the array

    setTimeout(typeText, 4000); // Wait before starting next word (adjust timing as needed)
}

typeText(); // Start the animation