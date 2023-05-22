const createProduct = document.getElementById("login-form");

const token = document.cookie.replace("token=", "");


createProduct.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(createProduct);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const userData = await res.json();

    console.log(data);
    console.log(userData);

    window.location.href = "../../../../views/shop/shop.html";
  } catch (error) {}
});
