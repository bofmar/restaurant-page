import Hero from "./assets/img/frontpage.jpg";
import Kids from "./assets/img/kids-menu.png";
import Parties from "./assets/img/parties.png";
import Award1 from "./assets/img/award1.png";
import Award2 from "./assets/img/award2.png";

export default function homePage(){
  const content = document.createElement("div");
  content.setAttribute("id", "homepage");

  createAndAppendImage(Hero,content);

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("home-main");

  createAndAppendText("h1",mainDiv,"Samisen Japanese Teppanyaki Restaurant");
  createAndAppendText("h2",mainDiv,"Genuine Japanese Cuisine in a Genuine Japanese Environment");
  
  const paragraphContainer = document.createElement("div");
  createAndAppendText("p",paragraphContainer,"The Samisen Japanese teppanyaki restaurant is located in Coral Bay in Paphos.  It offers genuine Japanese cuisine in an also genuine Japanese environment.");
  createAndAppendText("p",paragraphContainer,"There are cooking shows right before your eyes performed by the friendliest and skill full chefs.");
  createAndAppendText("p",paragraphContainer,"Samisen Japanese restaurant is also being offered for group parties, hen nights, bachelor parties and any kind of event you like.");
  mainDiv.appendChild(paragraphContainer);

  createAndAppendImage(Kids,mainDiv);
  createAndAppendImage(Parties,mainDiv);
  createAndAppendImage(Award1,mainDiv);
  createAndAppendImage(Award2,mainDiv);

  content.appendChild(mainDiv);

  return content;
}

function createAndAppendText(type,target,message){
  const text = document.createElement(type);
  text.innerText = message;
  target.appendChild(text);
}

function createAndAppendImage(path,target){
  const image = new Image();
  image.src = path;
  target.appendChild(image);
}