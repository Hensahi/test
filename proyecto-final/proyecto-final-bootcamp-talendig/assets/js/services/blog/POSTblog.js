const formBlog = document.getElementById("blog-form");
const token = document.cookie.replace("token=", "");

if (!token) {
  window.location.href = "../../../../index.html";
}

formBlog.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(formBlog);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const blogData = await res.json();
  } catch (error) {}
});


