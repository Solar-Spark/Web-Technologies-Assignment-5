

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    clearErrors(); // Clear previous error messages

    let isValid = true;

    // Get form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = document.getElementById("subject").value.trim()

    // Validate name
    if (name === "") {
        showError("nameError", "Name is required.");
        isValid = false;
    }

    // Validate email
    if (email === "") {
        showError("emailError", "Email is required.");
        isValid = false;
    } else if (!validateEmail(email)) {
        showError("emailError", "Please enter a valid email address.");
        isValid = false;
    }
    //Validate subject
    if (subject == "") {
        showError("subjectError", "Subject is required")
    }
    // Validate message
    if (message === "") {
        showError("messageError", "Message is required.");
        isValid = false;
    }

    // If the form is valid, you can submit it here or do further processing
    if (isValid) {
        alert("Form submitted successfully!");
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domain = "astanait.edu.kz";
    return regex.test(email) && email.endsWith(`@${domain}`);
}

// Function to display error messages
function showError(errorId, message) {
    document.getElementById(errorId).textContent = message;
}

// Function to clear error messages
function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => {
        element.textContent = ""; // Clears the error message
    });
}