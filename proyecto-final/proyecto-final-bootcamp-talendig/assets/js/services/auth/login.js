const formLogin = document.getElementById("login-form");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(formLogin);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const userData = await res.json();
    const { token } = userData;

    document.cookie = `token=${token}`;

    if (res.status == 200) {
      window.location.href = "../../../../views/shop/shop.html";
    }
  } catch (error) {}
});

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
