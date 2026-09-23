const form = document.getElementById("signupForm");
const errorBox = document.getElementById("formError");

form.addEventListener("submit", function (e) {
e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const gender = document.querySelector("input[name='gender']:checked");
const dob = document.getElementById("dob").value;
const password = document.getElementById("password").value;
const agree = document.getElementById("agree").checked;

let error = "";

if (name.length < 3) {
    error = "Name must be at least 3 characters long.";
}

else if (!(email.includes("@") && email.includes("."))) {
    error = "Please enter a valid email address.";
}

else if (!gender) {
    error = "Please select your gender.";
}

else if (!dob || new Date(dob) >= new Date()) {
    error = "Please enter a valid birth date in the past.";
}

else if (password.length < 6) {
    error = "Password must be at least 6 characters long.";
}

else if (!agree) {
    error = "You must agree to the terms.";
}

if (error) {
    errorBox.textContent = error;
} else {
    errorBox.textContent = "";
    alert("Welcome to the Noisecore Membership!");
}
});
