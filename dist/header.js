function header() {
  const header = document.querySelector("header");

  const nav = document.createElement("nav");

  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");

  home.classList.add("nav-element");
  home.classList.add("active");
  home.id = "home-button";
  home.textContent = "Home";

  menu.classList.add("nav-element");
  menu.id = "menu-button";
  menu.textContent = "Menu";

  contact.classList.add("nav-element");
  contact.classList.add("right-element");
  contact.id = "contacts-button";
  contact.textContent = "Contacts";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  header.appendChild(nav);

  const image = document.createElement("img");
  image.classList.add("img");
  image.src = "./images/anifoods.png";

  header.appendChild(image);

  document.body.appendChild(header);
}

export { header };
