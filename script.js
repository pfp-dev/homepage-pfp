// スクロールアニメーション
document.addEventListener("DOMContentLoaded", function () {
  // スクロールアニメーション要素の監視
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animateElements.forEach((element) => {
    observer.observe(element);
  });

  // メニュートグルの動作を実装
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navList.classList.toggle("active");
    });
  }

  // フローティングCTAの表示制御
  const floatingCTA = document.createElement("div");
  floatingCTA.className = "cta-floating";
  floatingCTA.innerHTML = `
        <a href="#contact" class="btn btn-primary"><i class="fas fa-envelope"></i> お問い合わせ</a>
        <a href="tel:0358482995" class="btn btn-secondary"><i class="fas fa-phone-alt"></i> 電話する</a>
    `;
  document.body.appendChild(floatingCTA);

  // ヘッダーのスクロール制御
  const header = document.querySelector(".header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 200) {
      header.classList.add("header-hidden");
    } else {
      header.classList.remove("header-hidden");
    }

    if (scrollTop > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }

    lastScrollTop = scrollTop;
  });

  // お問い合わせフォームの送信処理
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // フォームデータの取得
      const formData = new FormData(contactForm);
      const formValues = {};

      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }

      // 通常はここでAPIにデータを送信
      // この例ではモックの成功メッセージを表示

      // 送信中の表示
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = "送信中...";
      submitButton.disabled = true;

      // 成功メッセージの表示（実際の実装ではAPIレスポンス後に表示）
      setTimeout(() => {
        // フォームを非表示
        contactForm.style.display = "none";

        // 成功メッセージを表示
        const successMessage = document.createElement("div");
        successMessage.className = "form-success";
        successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <h3>お問い合わせありがとうございます</h3>
                    <p>内容を確認次第、担当者より折り返しご連絡いたします。<br>通常1営業日以内にご返信いたします。</p>
                    <p><strong>お問い合わせ内容:</strong> ${
                      formValues["inquiry-type"] || "未選択"
                    }</p>
                `;

        contactForm.parentNode.appendChild(successMessage);

        // アニメーションでメッセージを表示
        setTimeout(() => {
          successMessage.classList.add("show");
        }, 10);

        // フォームをリセット
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1500);
    });
  }

  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
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
});

// パララックス効果
window.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax-scroll");

  parallaxElements.forEach((element) => {
    const scrollPosition = window.pageYOffset;
    element.style.transform = `translateY(${scrollPosition * 0.4}px)`;
  });
});
