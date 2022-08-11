import Icon from "./assets/img/logo.png";

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

function createButton(name){
  const button = document.createElement("button");
  button.setAttribute("id", name); //we need the id for switching the pages

  button.innerText = name.toUpperCase().split("-")[0];

  return button;
}