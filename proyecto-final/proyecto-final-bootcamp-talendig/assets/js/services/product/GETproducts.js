const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    products = data;

    showProducts();
  } catch (error) {
    console.log(error);
  }
};

getProducts();

function showProducts() {
  const width = "540px";
  const height = "720px";
  products.forEach((product) => {
    const productContainer = document.createElement("LI");
    productContainer.classList.add("scrollbar-item");

    const productContainerWithFilter = document.createElement("LI");
    productContainerWithFilter.classList.add("scrollbar-item");

    productContainer.innerHTML = `
        <div class="shop-card">
        <div
          class="card-banner img-holder"
          style="--width: ${width}; --height:${height}"
        >
          <img
            src="${product.image}"
            max-width="${width}"
            max-height="${height}"
            loading="lazy"
            alt="${product.title}"
            class="img-cover"
          />

          <div class="card-actions">
            <button class="action-btn" aria-label="add to cart">
              <ion-icon
                name="bag-handle-outline"
                aria-hidden="true"
              ></ion-icon>
            </button>

            <button class="action-btn" aria-label="add to whishlist">
              <ion-icon
                name="star-outline"
                aria-hidden="true"
              ></ion-icon>
            </button>

            <button class="action-btn" aria-label="compare">
              <ion-icon
                name="repeat-outline"
                aria-hidden="true"
              ></ion-icon>
            </button>
          </div>
        </div>

        <div class="card-content">
          <div class="price">
            <span class="span">$${product.price}</span>
          </div>

          <h3>
            <a href="#" class="card-title">${product.title}</a>
          </h3>

          <div class="card-rating">
            <div class="rating-wrapper" aria-label="5 start rating">
              <ion-icon name="star" aria-hidden="true"></ion-icon>
              <ion-icon name="star" aria-hidden="true"></ion-icon>
              <ion-icon name="star" aria-hidden="true"></ion-icon>
              <ion-icon name="star" aria-hidden="true"></ion-icon>
              <ion-icon name="star" aria-hidden="true"></ion-icon>
            </div>

            <p class="rating-text">5170 reviews</p>
          </div>
        </div>
      </div>
        `;

    productContainerWithFilter.innerHTML = `
        <div class="shop-card">
        <div
          class="card-banner img-holder"
          style="--width: ${width}; --height:${height}"
        >
          <img
            src="${product.image}"
            max-width="${width}"
            max-height="${height}"
            loading="lazy"
            alt="${product.title}"
            class="img-cover"
          />

          <div class="card-actions">
            <button class="action-btn" aria-label="add to cart">
              <ion-icon
                name="bag-handle-outline"
                aria-hidden="true"
              ></ion-icon>
            </button>

            <button class="action-btn" aria-label="add to whishlist">
              <ion-icon
                name="star-outline"
                aria-hidden="true"
              ></ion-icon>
            </button>

            <button class="action-btn" aria-label="compare">
              <ion-icon
                name="repeat-outline"
                aria-hidden="true"
              ></ion-icon>
            </button>
          </div>
        </div>

        <div class="card-content">
          <div class="price">
            <span class="span">$${product.price}</span>
          </div>

          <h3>
            <a href="#" class="card-title">${product.title}</a>
          </h3>

          <div class="card-rating">
            <div class="rating-wrapper" aria-label="5 start rating">
              <ion-icon name="star" aria-hidden="true"></ion-icon>
              <ion-icon name="star" aria-hidden="true"></ion-icon>
              <ion-icon name="star" aria-hidden="true"></ion-icon>
              <ion-icon name="star" aria-hidden="true"></ion-icon>
              <ion-icon name="star" aria-hidden="true"></ion-icon>
            </div>

            <p class="rating-text">5170 reviews</p>
          </div>
        </div>
      </div>
        `;

    const productsList = document.querySelector("#has-scrollbar");
    const productsListWithFilter = document.querySelector(
      "#has-scrollbar-with-filter"
    );
    
    productsList.appendChild(productContainer);
    productsListWithFilter.appendChild(productContainerWithFilter);
  });
}

{
  /* <span class="badge" aria-label="20% off">-20%</span> */
  // <del class="del">$39.00</del>
}
