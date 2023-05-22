// $(".buy").click(function () {
//   $(".bottom").addClass("clicked");
// });

// $(".remove").click(function () {
//   $(".bottom").removeClass("clicked");
// });

const token = document.cookie.replace("token=", "");

const getProducts = async () => {

  const res = await fetch("http://localhost:3000/products", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();

  if (!token) {
    window.location.href = "../../../../index.html";
  }

};

getProducts();
