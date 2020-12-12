const content = document.getElementById("content");

function appendToContent(element, clasList, text) {
  const newElement = document.createElement(element);
  if (clasList !== "") {
    newElement.classList.add(clasList);
  }
  newElement.textContent = text;

  content.appendChild(newElement);

  return newElement;
}

function addStaff(url) {
  const newStaff = document.createElement("img");
  newStaff.src = url;
  newStaff.classList.add("staff");

  staffContainer.appendChild(newStaff);
}

export { appendToContent, addStaff };

appendToContent("h1", "", "About");

appendToContent(
  "p",
  "about",
  "Ani Foods has the best food from all over the Anime World. Whether you are a simple person wanting some simple foods, a lavish person who likes to have a gourmet or a demon/titan/ghoul wanting to devour people, we have got you covered. We provide high quality food at an affordable cost and our staff are very hardworking and will help you whatever you want."
);

appendToContent("h2", "staff-head", "Our Main Staff");

const staffContainer = appendToContent("div", "images", "");

addStaff("./images/sanji.webp");
addStaff("./images/alice.jpg");
addStaff("./images/erina.jpg");
addStaff("./images/iida.png");
addStaff("./images/isabella.jpeg");
addStaff("./images/isshiki.png");
addStaff("./images/yoshimura.jpg");
addStaff("./images/rindou.jpg");
addStaff("./images/shun.jpg");
addStaff("./images/soma.jpg");
