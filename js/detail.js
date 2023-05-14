import product from "../js/product.js";
import productGroup from "../js/group.js";

window.addEventListener("DOMContentLoaded", () => {
  // 쿼리 받아서 읽어오기
  let query = window.location.href.split("?").pop();
  let data = product.find(v => v.id == query);
  let top = document.getElementsByClassName("top")[0];
  let detailImg = document.getElementsByClassName("detailImg")[0];
  let group = productGroup.find(v => v.find(x => x == query));
  let groupEl = document.createElement("div");
  groupEl.classList.add("grouper");

  if (data) {
    top.innerHTML = `
      <div class="thumb">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="./product/${data.id}/thumb.jpg" alt=""></div>
              <div class="swiper-slide"><img src="./product/${data.id}/thumb2.jpg" alt=""></div>
            </div>
          </div>
        </div>

        <div class="info">
          <p class="code">상품코드 : ${data.id}</p>
          <p class="name">${data.name} ${data.color}</p>
          <p class="price">${isNaN(data.price) ? data.price : data.price.toLocaleString() + "원"}${Object.hasOwn(data, "check") ? '<br>' + data.check : ""}</p>
          <p class="other">${data.material}<br>${data.size}<br>원산지 : ${data.origin}</p>
        </div>
  `;
    detailImg.src = `./product/${data.id}/product.jpg`;
    let mainSwiper = new Swiper(".swiper", {
      loop: true,
      allowTouchMove: true,
      speed: 1100,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'slide',
      autoplay: {
          delay: 1600,
          disableOnInteraction: true,
      }
  })
  }

  if (group) {
    group.forEach(v => {
      let el2 = document.createElement("div");
      el2.classList.add("list");
      el2.innerHTML = `<a href="./product.html?${v}"><img src="./product/${v}/thumb.jpg" alt=""></a>`;
      groupEl.appendChild(el2)
    })
  } else {
    let el2 = document.createElement("div");
    el2.classList.add("list");
    el2.innerHTML = `<a href="./product.html?${data.id}"><img src="./product/${data.id}/thumb.jpg" alt=""></a>`;
    groupEl.appendChild(el2);
  }
  top.appendChild(groupEl)
})
