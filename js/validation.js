// =======================================
// Contact Form Validation
// =======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const subjectValue = subject.value.trim();
        const messageValue = message.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Name Validation
        if (nameValue === "") {
            alert("Please enter your name.");
            name.focus();
            return;
        }

        if (nameValue.length < 3) {
            alert("Name must contain at least 3 characters.");
            name.focus();
            return;
        }

        // Email Validation
        if (emailValue === "") {
            alert("Please enter your email.");
            email.focus();
            return;
        }

        if (!emailPattern.test(emailValue)) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        // Subject Validation
        if (subjectValue === "") {
            alert("Please enter the subject.");
            subject.focus();
            return;
        }

        if (subjectValue.length < 5) {
            alert("Subject must contain at least 5 characters.");
            subject.focus();
            return;
        }

        // Message Validation
        if (messageValue === "") {
            alert("Please enter your message.");
            message.focus();
            return;
        }

        if (messageValue.length < 10) {
            alert("Message must contain at least 10 characters.");
            message.focus();
            return;
        }

        // Success
        alert("✅ Your message has been sent successfully!");

        contactForm.reset();

    });

}