import banner from "./banner.js";
import homepage from "./homepage.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";
import "./styles/reset.css";
import "./styles/style.css";

let currentPage = "HOME";
const content = document.getElementById("content");

(function initial(){
  content.appendChild(banner());
  content.appendChild(homepage());
})();

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", switchPage);
});

function switchPage(e){
  const nextPage = e.target.innerText;
  
  if(nextPage === currentPage) return;

  // detach the current page
  content.removeChild(content.lastChild);

  // attach new child
  switch(nextPage){
    case "HOME":
      content.appendChild(homepage());
      break;
    case "MENU":
      content.appendChild(menuPage());
      break;
    case "CONTACT":
      content.appendChild(contactPage());
      break;
  }

  // update currentPage
  currentPage = nextPage;
}