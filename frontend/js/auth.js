const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Fake auth success
  window.location.href = "/frontend/html/org.html";
});
