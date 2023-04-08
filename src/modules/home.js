import Chef from "../img/theChef.jpg"

export function Home() {
  const content = document.querySelector(".content");
  const children = Array.from(content.childNodes);
  for (let i = 0; i < children.length; i++) {
    content.removeChild(content.lastChild);
  }
  const p = document.createElement("p");
  p.classList.add("home-text");
  p.textContent = "Come to the world's most famous chef's fine dining restaurant which has 5 michelin stars!"
  content.append(p);
  const theChef = new Image();
  theChef.src = Chef;
  content.appendChild(theChef).className = "the-chef";
}