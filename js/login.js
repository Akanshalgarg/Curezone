document.querySelector('.img-btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s-signup')
}
);


document.addEventListener("DOMContentLoaded", function () {
    const studentLoginButton = document.querySelector(".img-btn .m-in");
    const doctorLoginButton = document.querySelector(".img-btn .m-up");
    const studentForm = document.querySelector(".form.sign-in");
    const doctorForm = document.querySelector(".form.sign-up");

    studentLoginButton.addEventListener("click", function () {
        studentForm.style.display = "block";
        doctorForm.style.display = "none";
    });

    doctorLoginButton.addEventListener("click", function () {
        studentForm.style.display = "none";
        doctorForm.style.display = "block";
    });

    // Student Login Form Submission
    const studentLoginBtn = document.getElementById("loginButton");
    studentLoginBtn.addEventListener("click", function () {
        const studentEmail = studentForm.querySelector("input[name='email']").value;
        const studentPassword = studentForm.querySelector("input[name='password']").value;

        // Perform validation and further actions as needed
        if (studentEmail.endsWith("@thapar.edu")) {
            if (studentPassword.trim() !== "") { // Check if password is not empty
                // Student login success
                window.location.href = "index.html";
            } else {
                alert("Please enter your password.");
            }
        } else {
            alert("Invalid email address! Please use an @thapar.edu email.");
        }
    });

    // Doctor Login Form Submission
    const doctorLoginBtn = document.getElementById("loginBtn");
    doctorLoginBtn.addEventListener("click", function () {
        const doctorEmail = doctorForm.querySelector("input[type='email']").value;
        const doctorPassword = doctorForm.querySelector("input[type='password']").value;

        // Perform validation and further actions as needed
        if (doctorEmail === "aakanshal_be21@thapar.edu") {
            if (doctorPassword.trim() !== "") { // Check if password is not empty
                window.location.href = "index2.html";
            } else {
                alert("Please enter your password.");
            }
        } else {
            alert("Invalid doctor credentials.");
        }
    });
});
let isLoggedIn = false; // This variable simulates whether the user is already logged in or not

function onGoogleLogin(googleUser) {
    const profile = googleUser.getBasicProfile();
    const email = profile.getEmail();

    if (email.endsWith("@thapar.edu")) {
        alert("Logged in with Google. Email: " + email);
        isLoggedIn = true; // Mark the user as logged in
        // You can redirect to a different page or perform other actions here.
    } else {
        alert("Google login is only allowed for @thapar.edu email addresses.");
        // You might want to sign the user out here.
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.getElementById("resetButton");
    const emailInput = document.getElementById("email");

    resetButton.addEventListener("click", function () {
        const email = emailInput.value;

        if (email.endsWith("@thapar.edu")) {
            if (isLoggedIn) {
                alert("You are already logged in.");
                // Provide options for users who are already logged in.
            } else {
                alert("Password reset email sent to " + email);
                // You can perform further actions like sending a reset email here.
            }
        } else {
            alert("Password reset is only allowed for @thapar.edu email addresses.");
        }
    });
});


