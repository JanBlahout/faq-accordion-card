"use strict";

const items = document.querySelectorAll(".item");

items.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.closest(".item").classList.toggle("open");
  });
});
