import Hero from "./assets/img/frontpage.jpg";
import Kids from "./assets/img/kids-menu.png";
import Parties from "./assets/img/parties.png";
import Award1 from "./assets/img/award1.png";
import Award2 from "./assets/img/award2.png";
import { createAndAppendText, createAndAppendImage } from "./helpers";

export default function homePage(){
  const content = document.createElement("div");
  content.setAttribute("id", "homepage");
  content.classList.add("homepage");

  createAndAppendImage(Hero,content,"hero");

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("home-main");

  
  const paragraphContainer = document.createElement("div");
  createAndAppendText("h1",paragraphContainer,"Samisen Japanese Teppanyaki Restaurant");
  createAndAppendText("h2",paragraphContainer,"Genuine Japanese Cuisine in a Genuine Japanese Environment");
  createAndAppendText("p",paragraphContainer,"The Samisen Japanese teppanyaki restaurant is located in Coral Bay in Paphos.  It offers genuine Japanese cuisine in an also genuine Japanese environment.");
  createAndAppendText("p",paragraphContainer,"There are cooking shows right before your eyes performed by the friendliest and skill full chefs.");
  createAndAppendText("p",paragraphContainer,"Samisen Japanese restaurant is also being offered for group parties, hen nights, bachelor parties and any kind of event you like.");
  mainDiv.appendChild(paragraphContainer);

  createAndAppendImage(Kids,mainDiv,"kids");
  createAndAppendImage(Parties,mainDiv,"parties");
  createAndAppendImage(Award1,mainDiv,"award1");
  createAndAppendImage(Award2,mainDiv,"award2");

  content.appendChild(mainDiv);

  return content;
}