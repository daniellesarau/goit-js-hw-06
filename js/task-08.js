const check = document.querySelector(".login-form");
check.addEventListener("submit", checkLogin);
function checkLogin(event) {
 event.preventDefault();
 const {
  elements: { email, password },
 } = event.currentTarget;

 if (email.value === "" || password.value === "") {
  return alert("Please, complete all !");
 }

 const userAcount = { email: email.value, password: password.value };
 console.log("userAcount", userAcount);

 event.currentTarget.reset();
}
