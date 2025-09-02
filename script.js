
// Event Handling

const button = document.getElementById("clickBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button!";
});

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "lightblue";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "";
});

document.addEventListener("keydown", (e) => {
  message.textContent = `⌨️ You pressed: ${e.key}`;
});


// Interactive Elements

// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// FAQ Collapse
const toggle = document.querySelector(".faq-toggle");
const answer = document.querySelector(".faq-answer");

toggle.addEventListener("click", () => {
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
});


// Form Validation

const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Final success message
  if (valid) {
    document.getElementById("success").textContent =
      "✅ Form submitted successfully!";
    form.reset();
  } else {
    document.getElementById("success").textContent = "";
  }
});
