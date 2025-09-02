// シンプルなスクリプト - 基本機能のみ
document.addEventListener("DOMContentLoaded", function () {
  console.log("ページが読み込まれました");

  // メニュートグルの動作
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      console.log("メニュートグルがクリックされました");
      menuToggle.classList.toggle("active");
      navList.classList.toggle("active");
    });
  }

  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      console.log("スクロール先: " + targetId);
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight =
          document.querySelector(".header")?.offsetHeight || 0;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // 基本的なフォーム送信処理
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("フォームが送信されました");
      alert(
        "お問い合わせありがとうございます。実際の実装ではこの部分でデータが送信されます。"
      );
    });
  }
});
