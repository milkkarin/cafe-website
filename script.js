
const menuButton = document.querySelector(".menu-toggle");

const nav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {

  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuButton.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く"
  );

  menuButton.textContent = isOpen ? "✕" : "☰";

});

// メニュー内のリンクをすべて取得
const navLinks = document.querySelectorAll("#main-nav a");

// リンクがクリックされたらメニューを閉じる
navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    menuButton.textContent = "☰";

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute(
      "aria-label",
      "メニューを開く"
    );

  });

});
