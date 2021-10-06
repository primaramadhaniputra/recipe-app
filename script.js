const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    `Please dobule check your class names,
      there is no ${selector} class`
  );
};

// js for navbar
const togglebtn = getElement(".toggle-btn");
const links = getElement(".links-container");
togglebtn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
// end js for navbar
