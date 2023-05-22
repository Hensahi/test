

/* ========== Categories Products =========== */

const categoriesProducts = document.querySelector('.categories .products');
const loadmore = document.querySelector('.loadmore');

let currentIndex = 0;
async function loadData() {
  let maxResult = 8;
  let products = await getProducts();
  if (currentIndex >= products.length) {
    loadmore.disabled = true;
    loadmore.innerText = 'No More Products';
    return;
  }

  for (var i = 0; i < maxResult; i++) {
    const product = products[i + currentIndex];
    categoriesProducts.insertAdjacentHTML(
      'beforeend',
      `<div class="product">
          <div class="top d-flex">
            <img src=${product.url} alt="" />
            <div class="icon d-flex">
              <i class="bx bxs-heart"></i>
            </div>
          </div>
          <div class="bottom">
            <div class="d-flex">
              <h4>${product.title}</h4>
              <a href="" class="btn cart-btn">Add to Cart</a>
            </div>
            <div class="d-flex">
              <div class="price">$${product.price}</div>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
            </div>
          </div>
        </div>`
    );
  }

  currentIndex += maxResult;
}

loadmore.addEventListener('click', loadData);
