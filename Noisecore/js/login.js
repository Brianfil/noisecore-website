document.getElementById("loginForm").addEventListener("submit", function (e) {
e.preventDefault();

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

if (email === "" || password === "") {
    alert("Please fill in the fields");
} else {
    window.location.href = "../html/index.html";
}
});