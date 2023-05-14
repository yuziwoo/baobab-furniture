import product from "../js/product.js";

document.getElementsByClassName("header-wrap")[0].innerHTML = `
<div id="header" class="header">
            <div class="logo"><a href="./index.html" target="_self"><img src="./img/logo.png" alt="logo"></a></div>
            <div class="gnb">
                <div class="list for-pc"><a href="./list.html?wood" target="_self"><p class="header-list">WOOD</p></a></div>
                <div class="list for-pc"><a href="./list.html?metal" target="_self"><p class="header-list">METAL</p></a></div>
                <div class="list for-pc"><a href="./list.html?sofa" target="_self"><p class="header-list">SOFA</p></a></div>
                <div class="list for-pc"><a href="./list.html?table" target="_self"><p class="header-list">TABLE</p></a></div>
                <div class="list for-pc"><a href="./list.html?stool" target="_self"><p class="header-list">BAR & STOOL</p></a></div>
                <div class="list for-pc"><a href="./contact.html" target="_self"><p class="header-list">CONTACT</p></a></div>
                <!-- <div class="list header-search-button search"><img src="./img/search-mob.png" alt="" class="for-mob"><img src="./img/search-pc.png" alt="" class="for-pc"></div> -->
                <div class="list for-mob header-hamb-button hamb"><img src="./img/menu.png" alt=""><img src="./img/menu-close.png" alt=""></div>
            </div>
        </div>
        <div class="header header-shadow">
            <div class="logo"><img src="./img/logo.png" alt="" style="opacity: 0;"></div>
        </div>
        <div class="header-hamb">
            <div class="box box1"><a href="./list.html?wood"><img src="./img/menu1.png" alt=""></a></div>
            <div class="box box2"><a href="./list.html?metal"><img src="./img/menu2.png" alt=""></a></div>
            <div class="box box3"><a href="./list.html?sofa"><img src="./img/menu3.png" alt=""></a></div>
            <div class="box box4"><a href="./list.html?table"><img src="./img/menu4.png" alt=""></a></div>
            <div class="box box5"><a href="./list.html?sttol"><img src="./img/menu5.png" alt=""></a></div>
            <div class="box box6"><a href="./contact.html"><img src="./img/menu6.png" alt=""></a></div>
            <div class="circle circle1"><img src="./img/main-circle.png" alt=""></div>
            <div class="circle circle2"><img src="./img/main-circle.png" alt=""></div>
        </div>
        <div class="header-search"></div>
`

window.addEventListener("DOMContentLoaded", () => {
  let buttonH = document.getElementsByClassName("header-hamb-button")[0];
  let hamb = document.getElementsByClassName("header-hamb")[0];
  let header = document.getElementById("header");

  buttonH.addEventListener("click", () => {
    hamb.classList.toggle("header-hamb-on");
    header.classList.toggle("header-hambis-on");
  })
})