import Address from "../img/address.png"

export function Contact() {
  const content = document.querySelector(".content");
  const children = Array.from(content.childNodes);
  for (let i = 0; i < children.length; i++) {
    content.removeChild(content.lastChild);
  }
  let address = new Image();
  address.src = Address;
  address.classList.add("address-img");
  content.append(address)
  let p1 = document.createElement("p");
  p1.classList.add("address-text");
  p1.textContent = "237 Baker St, London NW1 6XE, United Kingdom"
  content.append(p1);

  let p2 = document.createElement("p");
  p2.classList.add("phone");
  p2.textContent = "For Reservations: 555-555-555"
  content.append(p2);
}