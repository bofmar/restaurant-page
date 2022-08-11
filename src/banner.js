import Icon from "./assets/img/logo.png";
import { createButton } from "./helpers";

export default function banner(){
  const header = document.createElement("header");

  // create and append the logo
  const logo = new Image();
  logo.src = Icon;
  header.appendChild(logo);
  
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons-container");

  const homeButton = createButton("home-button");
  const menuButton = createButton("menu-button");
  const contactButton = createButton("contact-button");

  buttonsDiv.appendChild(homeButton);
  buttonsDiv.appendChild(menuButton);
  buttonsDiv.appendChild(contactButton);

  header.appendChild(buttonsDiv);
  
  return header;
}