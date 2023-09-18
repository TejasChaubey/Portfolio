
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  // this event is to actige link and put color on bottom
  document.getElementById(tabname).classList.add("active-tab");
  // this documentis to shwo the content..
}


var sideme = document.getElementById("sidemenu");
function openmenu() {
  sideme.style.right = "0";
}
function closemenu() {
  sideme.style.right = "-200px";
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzhuLuVRp7aEQWWU5Xw_7kBx6KnwAP4LnxQC7kRmcHdH6Gd8ZQDvGotPku72FiZZlk/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
