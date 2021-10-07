const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    `Please dobule check your class names,
      there is no ${selector} class`
  );
};

// html elements
const togglebtn = getElement(".toggle-btn");
const links = getElement(".links-container");
const foodContainer = getElement(".food-container");

// class for get product
class Products {
  getProduct() {
    fetch("product.json")
      .then((res) => res.json())
      .then((result) => {
        UiProduct.displayUI(result);
      });
  }
}

// class for ui product
class UiProduct {
  static displayUI(res) {
    let data = "";
    res.forEach((response) => {
      data += `<div class="single-food">
      <div class="image-food">
        <img src=${response.image} alt=${response.title} />
      </div>
      <p class="food-title">${response.title}</p>
      <div class="cook-time">
        <p>prep : ${response.prep} | cook : ${response.cook}</p>
      </div>
    </div>`;
    });
    foodContainer.innerHTML = data;
  }
}

// js for navbar
togglebtn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
// end js for navbar

// js for product
window.addEventListener("DOMContentLoaded", function () {
  const product = new Products();
  product.getProduct();
});
