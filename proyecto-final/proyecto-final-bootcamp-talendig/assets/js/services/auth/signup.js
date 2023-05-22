const formSignup = document.getElementById("signup-form");

formSignup.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(formSignup);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const userData = await res.json();

    window.location.href = "../../../../index.html";
  } catch (error) {}
});
