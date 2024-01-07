document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((button) => {
    // Minus icons are hidden by default
    button.querySelector(".accordion-icon-minus").classList.add("hide");
    button.addEventListener("click", function () {
      const accordionContent = button.nextElementSibling;
      const accordionIconPlus = button.querySelector(".accordion-icon-plus");
      const accordionIconMinus = button.querySelector(".accordion-icon-minus");
      accordionContent.classList.toggle("active");
      if (accordionContent.classList.contains("active")) {
        accordionIconPlus.classList.add("hide");
        accordionIconMinus.classList.remove("hide");
      } else {
        accordionIconPlus.classList.remove("hide");
        accordionIconMinus.classList.add("hide");
      }
    });
  });
});
