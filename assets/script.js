function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Basic authentication logic for demo purposes
  if (email === "Eathen" && password === "password123") {
    window.location.href = "investor1.html"; // Redirect to Investor 1 dashboard
  } else if (email === "investor2@example.com" && password === "password123") {
    window.location.href = "investor2.html"; // Redirect to Investor 2 dashboard
  } else if (email === "Sagor" && password === "password123") {
    window.location.href = "investor3.html"; // Redirect to Investor 3 dashboard
  } else {
    alert("Invalid login credentials");
  }
}
