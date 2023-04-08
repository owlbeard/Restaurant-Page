import Logo from "./img/chef.png";
import Gitcat from "./img/github.svg";
import Chef from "./img/theChef.jpg"
import './styles/style.css';
import './styles/normalize-css.css';
import {Home} from "./modules/home.js";
import {Menu} from "./modules/menu.js";
import {Contact} from "./modules/contact.js"

const skelly = function() {
  const container = document.querySelector(".container");
  const headerDiv = document.createElement("div");
  const contentDiv = document.createElement("div");
  const footerDiv = document.createElement("div");


  headerDiv.className = "header";
  container.append(headerDiv);
  contentDiv.className = "content";
  container.append(contentDiv);
  footerDiv.className = "footer";
  container.append(footerDiv);

  let header = document.querySelector(".header");
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  header.append(logoDiv);
  
  let logo = document.querySelector(".logo");
  const siteLogo = new Image();
  siteLogo.src = Logo;
  logo.appendChild(siteLogo).className = "logo-img";
  const logoH4 = document.createElement("h4");
  logoH4.textContent = "Omar's";
  logoH4.className = "logo-text"
  logo.append(logoH4);

  const navbarDiv = document.createElement("div");
  navbarDiv.className = "navbar";
  header.append(navbarDiv);
  let navbar = document.querySelector(".navbar");

  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.className = "home";
  navbar.append(homeButton);
  menuButton.textContent = "Menu";
  menuButton.className = "menu";
  navbar.append(menuButton);
  contactButton.textContent = "Contact";
  contactButton.className = "contact";
  navbar.append(contactButton);

  const content = document.querySelector(".content");
  const p = document.createElement("p");
  p.classList.add("home-text");
  p.textContent = "Come to the world's most famous chef's fine dining restaurant which has 5 michelin stars!"
  content.append(p);
  const theChef = new Image();
  theChef.src = Chef;
  content.appendChild(theChef).className = "the-chef";

  let footer = document.querySelector(".footer");
  let footerH4 = document.createElement("h4");
  let a = document.createElement("a");
  footerH4.textContent = "Copyright © 2023 || owlbeard";
  footerH4.className = "footer-text";
  const footerLogo = new Image();
  footerLogo.src = Gitcat;
  footerLogo.classList.add("footer-img");
  a.classList.add("link")
  a.setAttribute("href", "https://github.com/owlbeard")
  footer.append(a);
  let link = document.querySelector(".link")
  link.appendChild(footerLogo);
  footer.append(footerH4);
  
  const home = document.querySelector(".home");
  home.addEventListener("click", Home)

  const menu = document.querySelector(".menu");
  menu.addEventListener("click", Menu)

  const contact = document.querySelector(".contact");
  contact.addEventListener("click", Contact)
}

skelly();