import Fried from "../img/fried-rice.jpg"
import Matsu from "../img/matsusaka.jpg"
import Shoyu from "../img/soya-soslu-tavuk.jpg"
import Lotus from "../img/lotus.jpg"

export function Menu() {
  const content = document.querySelector(".content");
  const children = Array.from(content.childNodes);
  for (let i = 0; i < children.length; i++) {
    content.removeChild(content.lastChild);
  }
  content.innerHTML = `<span id="menu-header">Today's Menu</span>`;
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid-container");
  content.append(gridDiv);

  const friedDiv = document.createElement("div");
  const matsuDiv = document.createElement("div");
  const shoyuDiv = document.createElement("div");
  const lotusDiv = document.createElement("div");

  friedDiv.classList.add("fried-div");
  matsuDiv.classList.add("matsu-div");
  shoyuDiv.classList.add("shoyu-div");
  lotusDiv.classList.add("lotus-div");
  
  let gridContainer = document.querySelector(".grid-container");

  gridContainer.append(friedDiv);
  gridContainer.append(matsuDiv);
  gridContainer.append(shoyuDiv);
  gridContainer.append(lotusDiv);

  let friedContainer = document.querySelector(".fried-div");
  let matsuContainer = document.querySelector(".matsu-div");
  let shoyuContainer = document.querySelector(".shoyu-div");
  let lotusContainer = document.querySelector(".lotus-div");

  let fried = new Image();
  let matsu = new Image();
  let shoyu = new Image();
  let lotus = new Image();
  
  fried.src = Fried;
  fried.classList.add("fried")
  matsu.src = Matsu;
  matsu.classList.add("matsu")
  shoyu.src = Shoyu;
  shoyu.classList.add("shoyu")
  lotus.src = Lotus;
  lotus.classList.add("lotus")

  friedContainer.append(fried);
  matsuContainer.append(matsu);
  shoyuContainer.append(shoyu);
  lotusContainer.append(lotus);

  let p1 = document.createElement("p");
  p1.textContent = "Fried Rice";
  friedContainer.appendChild(p1).className = "fried-header";

  let p2 = document.createElement("p");
  p2.textContent = "Matsusaka Wagyu";
  matsuContainer.appendChild(p2).className = "matsu-header";
  
  let p3 = document.createElement("p");
  p3.textContent = "Creamy Garlic Mushroom Chicken";
  shoyuContainer.appendChild(p3).className = "shoyu-header";

  let p4 = document.createElement("p");
  p4.textContent = "Lotus Cheesecake";
  lotusContainer.appendChild(p4).className = "lotus-header";
}