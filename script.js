const fetchdata = async () => {
  const response = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448"
  );
  const result = await response.json();
};
fetchdata();
let text = document.querySelector(".cartmsg");
let btn = document
  .querySelector(".addToCart")
  .addEventListener("click", function () {
    text.style.display = "block";
    setTimeout(() => {
      text.style.display = "none";
    }, 3000);
  });
let count = 0;
document.querySelector(".increament").addEventListener("click", function () {
  count++;

  updateCount();
});
document.querySelector(".decrement").addEventListener("click", function () {
  count > 0 ? count-- : count;
  updateCount();
});

let qtn = document.querySelector(".quantity");
function updateCount() {
  qtn.textContent = count;
}
// btn.addEventListener("click", () => {});
