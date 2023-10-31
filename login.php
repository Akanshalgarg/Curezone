<!DOCTYPE html>
<html>

<head>
    <title>Login Page</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="login.css" >
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap" rel="stylesheet">
</head>

<body>
    <nav class="navbar bg-blue">
        <div class="fixed-header">
            <h4 class="text-white">Phn-No:9878420092 <img src="images/phn.png" alt="Phn"></h4>
            <h4 class="text-white">Email-healthcare@thapar.edu <img src="images/email.png" alt="Email"></h4>
        </div>
    </nav>
    <div class="cont">

        <div class="form sign-in">
            <h2> Login</h2>
            <label>
                <span>Email Address</span>
                <input type="email" name="email" required>
            </label>
            <label>
                <span>Password</span>
                <input type="password" name="password" required>
            </label>

            <button class="submit" id="loginButton" type="button">Doctor Login</button>
            <button class="submit2" id="loginButton" type="button">Student Login</button>


        </div>

        <div class="sub-cont">
            <div class="img" style="background-image: url('images/about-img.png');">
                <div class="img-text m-up">
                    <h2>Sign Up</h2>
                    <p>"Sign Up to use our health portal"</p>
                </div>

                <div class="img-text m-in">
                    <h2> Login</h2>
                    <p>Login to your dashboards</p>
                </div>
                <div class="img-btn">
                    <span class="m-up">LOGIN</span>
                    <span class="m-in">LOGIN</span>
                </div>
            </div>

            <div class="form sign-up">
                <h2>Sign Up</h2>
                <label>
                    <span>Name</span>
                    <input type="name" required>
                </label>
                <label>
                    <span>Email Address</span>
                    <input type="email" required>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" required>
                </label>

                <button type="button" id="loginBtn" class="submit">Register</button>

                <div class="social-media">
                    <!-- <ul>
                        <li><a href="https://www.facebook.com/officialTIET/"><img src="images/facebook.png"></a></li>
                        <li><a href="https://twitter.com/TIETofficial"><img src="images/twitter.png"></a></li>
                        <li><a href="https://www.linkedin.com/school/tietofficial/"><img src="images/linkedin.png"></a>
                        </li>

                    </ul> -->
                </div>
            </div>
        </div>
    </div>


    <!-- <script type="text/javascript" src="js/login.js"></script> -->
    <script>
        const doctorLoginButton = document.getElementById("loginButton");

        // Add a click event listener to the Doctor Login button
        doctorLoginButton.addEventListener("click", function (event) {

            event.preventDefault();


            const emailInput = document.querySelector('input[name="email"]').value;
            const passwordInput = document.querySelector('input[name="password"]').value;

            const allowedEmail = "aakanshal_be21@thapar.edu";
            const allowedPassword = "Asertghj@123";
            if (emailInput === allowedEmail && passwordInput === allowedPassword) {

                alert("Doctor Login Successful");
                window.location.href = "index2.html";
            } else {

                alert("Invalid email or password. Please try again.");
            }
        });




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
            // const studentLoginBtn = document.getElementById("loginButton");
            // studentLoginBtn.addEventListener("click", function () {
            //     const studentEmail = studentForm.querySelector("input[name='email']").value;
            //     const studentPassword = studentForm.querySelector("input[name='password']").value;

            //     // Perform validation and further actions as needed
            //     if (studentEmail.endsWith("@thapar.edu")) {
            //         if (studentPassword.trim() !== "") { // Check if password is not empty
            //             // Student login success
            //             window.location.href = "index.html";
            //         } else {
            //             alert("Please enter your password.");
            //         }
            //     } else {
            //         alert("Invalid email address! Please use an @thapar.edu email.");
            //     }
            // });


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
        });
    </script>
</body>

</html>