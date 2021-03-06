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
const btns = document.querySelectorAll(".link");
const main = getElement(".main");
const contactBtn = getElement(".contact-btn");
// class for get product
class Products {
  getProduct() {
    fetch("product.json")
      .then((res) => res.json())
      .then((result) => {
        UiProduct.displayUI(result);
      });
  }
  getDataProducts() {
    return fetch("product.json");
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
    let home = `<header>
    <article class="banner">
      <div class="banner-container">
        <div class="banner-text">
          <h3>Nusantara Recipes</h3>
          <p>no fluff, just recipes</p>
        </div>
      </div>
    </article>
    <article class="content">
      <div class="tags-container">
        <h3>recipes</h3>
        <div class="tags">
          <p>breakfast <span class="value-tags">(2)</span></p>
          <p>lunch<span class="value-tags">(2)</span></p>
          <p>dinner <span class="value-tags">(2)</span></p>
          <p>snacks <span class="value-tags">(2)</span></p>
        </div>
      </div>
      <div class="food-container">${data}</div>
    </article>
  </header>`;
    main.innerHTML = home;
  }
  static aboutProduct(res) {
    let data = "";
    res.forEach((element) => {
      data += `<div class="image-container">
      <div class="image">
      <img src=${element.image} alt=${element.title} /></div>
      <p class="image-title">${element.title}</p>
      <p class="image-info">prep : ${element.prep} | cook : ${element.cook}</p>
    </div>`;
    });
    let about = ` <section class="about">
    <article class="about-banner">
      <div class="about-info">
        <h3>I'm baby coloring book poke taxidermy</h3>
        <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
        <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
        <button class="about-contact">contact</button>
      </div>
      <div class="about-image"></div>
    </article>
    <article class="about-content">
      <p class="info-about">Look At This Awesomesouce!</p>
      <div class="about-image-container">
        <!-- single image -->
      ${data}
        <!-- end single image -->
      </div>
    </article>
  </section>`;
    main.innerHTML = about;
  }
  static tags() {
    main.innerHTML = `
    <section class="tags-page">
        <article class="tags-page-container">
          <!-- single tags -->
          <div class="single-tag">
            <h3 class="single-tag-heading">breakfast</h3>
            <p class="single-tag-value">2 recipe</p>
          </div>
          <!--  end of single tags -->
          <!-- single tags -->
          <div class="single-tag">
            <h3 class="single-tag-heading">dinner</h3>
            <p class="single-tag-value">2 recipe</p>
          </div>
          <!--  end of single tags -->
          <!-- single tags -->
          <div class="single-tag">
            <h3 class="single-tag-heading">lunch</h3>
            <p class="single-tag-value">2 recipe</p>
          </div>
          <!--  end of single tags -->
          <!-- single tags -->
          <div class="single-tag">
            <h3 class="single-tag-heading">snacks</h3>
            <p class="single-tag-value">2 recipe</p>
          </div>
          <!--  end of single tags -->
          
        </article>
      </section>`;
  }
  static recipes(res) {
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
    let home = `<header>
    <article class="content">
      <div class="tags-container">
        <h3>recipes</h3>
        <div class="tags">
          <p>breakfast <span class="value-tags">(2)</span></p>
          <p>lunch<span class="value-tags">(2)</span></p>
          <p>dinner <span class="value-tags">(2)</span></p>
          <p>snacks <span class="value-tags">(2)</span></p>
        </div>
      </div>
      <div class="food-container">${data}</div>
    </article>
  </header>`;
    main.innerHTML = home;
  }
  static contact(res) {
    let data = "";
    res.forEach((element) => {
      data += `<div class="image-container">
      <div class="image">
      <img src=${element.image} alt=${element.title} /></div>
      <p class="image-title">${element.title}</p>
      <p class="image-info">prep : ${element.prep} | cook : ${element.cook}</p>
    </div>`;
    });
    let about = ` <section class="about">
    <article class="about-banner">
      <div class="about-info">
        <h3>Want To Get In Touch?</h3>
        <p>Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.</p>
        <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
        <p>Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.</p>
        
      </div>
      <div class="about-form">
      <form>
            <div class="input-container">
              <div class="single-input">
                <label for="name" class="name">Your name</label>
                <input type="text" id="name" >
              </div>
              <div class="single-input">
                <label for="email" class="email">Your email</label>
                <input type="text" id="email" >
              </div>
              <div class="single-input">
                <label for="message" class="message">message</label>
              <textarea name="" id="message" disabled="true"></textarea>
              </div>
            </div>
          </form>
      </div>
    </article>
    <article class="about-content">
      <p class="info-about">Look At This Awesomesouce!</p>
      <div class="about-image-container">
        <!-- single image -->
      ${data}
        <!-- end single image -->
      </div>
    </article>
  </section>`;
    main.innerHTML = about;
  }
}
// instansiate class
const product = new Products();

// js for navbar
togglebtn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
// end js for navbar

// js for product
window.addEventListener("DOMContentLoaded", function () {
  product.getProduct();
});

// js for each link
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    btns.forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.textContent == "home") {
      product.getProduct();
    }
    if (e.target.textContent == "about") {
      product
        .getDataProducts()
        .then((res) => res.json())
        .then((res) => UiProduct.aboutProduct(res));
    }
    if (e.target.textContent == "tags") {
      UiProduct.tags();
    }
    if (e.target.textContent == "recipes") {
      product
        .getDataProducts()
        .then((res) => res.json())
        .then((res) => UiProduct.recipes(res));
    }
  });
});

contactBtn.addEventListener("click", function () {
  product
    .getDataProducts()
    .then((res) => res.json())
    .then((res) => UiProduct.contact(res));
});
