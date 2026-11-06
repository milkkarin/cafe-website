
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

/* ページトップに戻るボタン */

// ボタンを取得
const backToTop = document.querySelector("#back-to-top");

// スクロールしたときの処理
window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

});

// ボタンをクリックしたときの処理
backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// ライトボックスの要素を取得
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxClose = document.querySelector("#lightbox-close");

// メニュー写真をすべて取得
const menuImages = document.querySelectorAll(".menu-card img");

// 写真をクリックしたら拡大表示
menuImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.hidden = false;
    lightboxClose.focus();
  });
});

// ライトボックスを閉じる関数
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
}

// ×ボタンを押して閉じる
lightboxClose.addEventListener("click", closeLightbox);

// 写真の外側を押して閉じる
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// Escapeキーでも閉じる
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

/* Cookie同意バナー */

// HTMLの要素を取得
const cookieBanner = document.querySelector("#cookie-banner");
const cookieAccept = document.querySelector("#cookie-accept");
const cookieReject = document.querySelector("#cookie-reject");

// 保存されている選択を確認
const cookieConsent = localStorage.getItem("cookie-consent");

// まだ選んでいない場合はバナーを表示
if (cookieConsent !== "accepted" && cookieConsent !== "rejected") {
  cookieBanner.hidden = false;
}

// 「同意する」をクリックしたとき
cookieAccept.addEventListener("click", () => {
  localStorage.setItem("cookie-consent", "accepted");
  cookieBanner.hidden = true;
});

// 「同意しない」をクリックしたとき
cookieReject.addEventListener("click", () => {
  localStorage.setItem("cookie-consent", "rejected");
  cookieBanner.hidden = true;
});
