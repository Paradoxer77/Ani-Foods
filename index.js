// import statements

import { header } from "/dist/header.js";
import { homepage } from "/dist/main.js";
import { foot } from "/dist/footer.js";

//body elements

header();

// tab browsing buttons
const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

const home = document.getElementById("home-button");
const menu = document.getElementById("menu-button");
const contacts = document.getElementById("contacts-button");

function clickAndAdd(button) {
  home.classList.remove("active");
  menu.classList.remove("active");
  contacts.classList.remove("active");
  button.classList.add("active");
}

home.addEventListener("click", () => {
  clickAndAdd(home);
  content.innerHTML = "";
  homepage();
});

menu.addEventListener("click", () => {
  clickAndAdd(menu);
  content.innerHTML = "";
  menupage();
});

contacts.addEventListener("click", () => {
  clickAndAdd(contacts);
  content.innerHTML = "";
  contactspage();
});

homepage();
foot();

export { content };
