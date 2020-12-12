import { content } from "/dist/index.js";

function appendToContent(element, clasList, text) {
  const newElement = document.createElement(element);
  if (clasList !== "") {
    newElement.classList.add(clasList);
  }
  newElement.textContent = text;

  content.appendChild(newElement);

  return newElement;
}

function addStaff(url, container) {
  const newStaff = document.createElement("img");
  newStaff.src = url;
  newStaff.classList.add("staff");

  container.appendChild(newStaff);
}

function homepage() {
  appendToContent("h1", "", "About");

  appendToContent(
    "p",
    "about",
    "Ani Foods has the best food from all over the Anime World. Whether you are a simple person wanting simple food, a person who likes to have a gourmet or a demon/titan/ghoul wanting to devour people, we have got you covered. We provide high quality food at an affordable cost and our staff are very hardworking and will help you with whatever you want."
  );

  appendToContent("h2", "staff-head", "Our Main Staff");

  const staffContainer = appendToContent("div", "images", "");

  addStaff("./images/sanji.webp", staffContainer);
  addStaff("./images/alice.jpg", staffContainer);
  addStaff("./images/erina.jpg", staffContainer);
  addStaff("./images/iida.png", staffContainer);
  addStaff("./images/isabella.jpeg", staffContainer);
  addStaff("./images/isshiki.png", staffContainer);
  addStaff("./images/yoshimura.jpg", staffContainer);
  addStaff("./images/rindou.jpg", staffContainer);
  addStaff("./images/shun.jpg", staffContainer);
  addStaff("./images/soma.jpg", staffContainer);
}

export { homepage };
