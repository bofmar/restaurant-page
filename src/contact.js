import { createAndAppendText, createAndAppendImage, createDivWithClass } from "./helpers";
import Map from "./assets/img/paphos-map.png";

export default function contactPage(){
  const content = document.createElement("div");
  content.classList.add("contact-page");

  const addressSide = document.createElement("div");
  addressSide.classList.add("contact-address-wrapper");
  
  const addressTextDiv = createDivWithClass("address-text-wrapper");
  createAndAppendText("h1", addressTextDiv, "Address");
  createAndAppendText("p", addressTextDiv, "123 Fake Street Avenue");
  createAndAppendText("p", addressTextDiv, "Paphos, CY");
  createAndAppendText("p", addressTextDiv, "66357");
  addressSide.appendChild(addressTextDiv);

  createAndAppendImage(Map,addressSide, "map");

  const infoSide = document.createElement("div");
  infoSide.classList.add("contact-info-wrapper");

  const footer = document.createElement("footer");


  content.appendChild(addressSide);
  content.appendChild(infoSide);
  content.appendChild(footer);

  return content;
}