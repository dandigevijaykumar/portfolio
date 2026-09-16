// ================================
// Typing Animation
// ================================

const typingElement = document.getElementById("typing");

const textArray = [

    "Python Full Stack Developer",

    "Frontend Developer",

    "Backend Developer",

    "Web Designer",

    "Python Programmer",

    "Django Developer"

];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentText = textArray[textIndex];

    if (!isDeleting) {

        typingElement.textContent = currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent = currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex >= textArray.length) {

                textIndex = 0;

            }

        }

    }

    const speed = isDeleting ? 60 : 120;

    setTimeout(typeEffect, speed);

}

document.addEventListener("DOMContentLoaded", typeEffect);