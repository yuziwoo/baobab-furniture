import product from "../js/product.js";

window.addEventListener("DOMContentLoaded", () => {
  // 쿼리 받아서 읽어오기
let query = window.location.href.split("?").pop();
let queryNum = query == "wood" ? 1 : query == "metal" ? 2 : query == "sofa" ? 3 : query == "table" ? 4 : query == "stool" ? 5 : 0;

// header 메뉴 강조 효과
let headergnb = document.getElementsByClassName("header-list");
headergnb[queryNum-1].style.textDecoration = "underline";

let titleImg = document.getElementsByClassName("list-title-img");
if (queryNum > 0) {
  titleImg[0].src = `./img/list-${query}-pc.jpg`;
  titleImg[1].src = `./img/list-${query}-mob.jpg`;
} else {
  titleImg[0].src = `./img/list-none-pc.jpg`;
  titleImg[1].src = `./img/list-none-pc.jpg`;
}

let wrapper = document.getElementsByClassName("product-list")[0];
let newList = [];

if (queryNum > 0) {
  newList = [...product].filter((v) => v.type == query).sort((a, b) => b.render - a.render);
}

newList.forEach((v) => {
  let el = document.createElement("div");
  el.classList.add("item");
  el.innerHTML = `
<a href="./product.html?${v.id}">
  <div class="thumb">
      <img src="./product/${v.id}/thumb.jpg" alt="">
      <img src="./product/${v.id}/thumb2.jpg" alt="">
      <div class="box box1"><p>${v.material}</p></div>
      <div class="box box2"><p>${v.size}</p></div>
  </div>
  <div class="info">
      <p class="name">${v.name} ${v.color}</p>
      <p class="price">${isNaN(v.price) ? v.price : v.price.toLocaleString() + "원"}${Object.hasOwn(v, "check") ? '<br>' + v.check : ""}</p>
  </div>
</a>
  `
  wrapper.appendChild(el);
})
})

