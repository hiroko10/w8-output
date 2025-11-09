// html要素取得
const form = document.getElementById("contactForm");
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

// 入力時保存(JSON文字列へ変換)
form.addEventListener("submit", () => {
    const formData = {
        email: emailInput.value,
        password: passwordInput.value
    };
    localStorage.setItem("formData", JSON.stringify(formData));
});

// ページ読み込み時復元(データ取得/文字列をオブジェクトへ変換)
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("formData");
    if (saved) {
        const data = JSON.parse(saved);
        emailInput.value = data.email || "";
        passwordInput.value = data.password || "";
    }
});

// 削除
// form.addEventListener("submit", () => {
//     localStorage.removeItem("formData");
// });