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

});
