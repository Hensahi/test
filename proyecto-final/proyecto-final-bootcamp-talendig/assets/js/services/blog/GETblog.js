const token = document.cookie.replace("token=", "");

const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/blogs");

    const data = await res.json();
    blogs = data;

    showBlogs();
  } catch (error) {
    console.log(error);
  }
};

getBlogs();

function showBlogs() {
  blogs.forEach((blog) => {
    const blogContainer = document.createElement("DIV");
    // blogContainer.classList.add("");

    blogContainer.innerHTML = `
        <div class="tm-content-box">
          <img src="${blog.image}" alt="${blog.title}" class="tm-margin-b-20 img-fluid">
            <h4 class="tm-margin-b-20 tm-gold-text">${blog.title}</h4>
            <p class="tm-margin-b-20">${blog.description}</p>
            <a href="#" class="tm-btn text-uppercase">Detail</a>    
        </div>  
        `;

    const blogsList = document.querySelector("#blog-list");
    blogsList.appendChild(blogContainer);
  });
}
