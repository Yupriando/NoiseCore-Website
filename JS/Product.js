const filterToggle = document.getElementById("filter-toggle");
const filterOptions = document.querySelector(".filter-options");
const filterButtons = document.querySelectorAll(".filter-options button");
const productCards = document.querySelectorAll(".product-card");

filterToggle.addEventListener("click", () => {
  filterOptions.classList.toggle("hidden");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    filterOptions.classList.add("hidden");

    const category = button.getAttribute("data-filter");

    productCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      card.style.display =
        category === "all" || category === cardCategory ? "block" : "none";
    });
  });
});
