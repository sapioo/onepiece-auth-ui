document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const showLoginLink = document.getElementById("show-login-link");
  const showSignupLink = document.getElementById("show-signup-link");
  if (showLoginLink) {
    showLoginLink.addEventListener("click", (event) => {
      event.preventDefault();
      signupForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });
  }
  if (showSignupLink) {
    showSignupLink.addEventListener("click", (event) => {
      event.preventDefault();
      loginForm.classList.add("hidden");
      signupForm.classList.remove("hidden");
    });
  }
});
