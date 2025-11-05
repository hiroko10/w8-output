const container = document.querySelector("#container");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");
// console.log(container);
// console.log(email);
// console.log(password);
// console.log(btn);

btn.addEventListener("click", () => {
    const inputData = email.value;
    localStorage.setItem("key", inputData);
    email.value = "";
});
