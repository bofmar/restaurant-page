import curryRice from "./assets/img/curry-rice.png";
import makizushi from "./assets/img/makizushi.png";
import oden from "./assets/img/oden.png";
import ramen from "./assets/img/ramen.png";
import sashimi from "./assets/img/sashimi.png";
import sukiyaki from "./assets/img/sukiyaki.png";
import takoyaki from "./assets/img/takoyaki.png";
import tempura from "./assets/img/tempura.png";

import { createAndAppendImage, createAndAppendMenuText, createDivWithClass } from "./helpers";

export default function menuPage(){
  const content = document.createElement("div");
  content.classList.add("menu");
  const images = [curryRice,makizushi,oden,ramen,sashimi,sukiyaki,takoyaki,tempura];
  
  // iterate through all menu images, create them in html and append them to a div.
  // return an array of those divs for further modification.
  const menuItems = images.map(image =>{
    const newDiv = createDivWithClass("menu-item");
    createAndAppendImage(image,newDiv,"menu-image");
    content.appendChild(newDiv);

    return newDiv;
  });
  
  createAndAppendMenuText("Curry Rice", "11.35€", "Experience one of Japan's most popular dishes!", menuItems[0], "menu-text");
  createAndAppendMenuText("Makizushi", "8.25€", "Delicious sushi bites, wraped in nori.", menuItems[1], "menu-text");
  createAndAppendMenuText("Oden", "17.15€", "Japanese style hotpot. Experience one of Japan's most popular street foods!", menuItems[2], "menu-text");
  createAndAppendMenuText("Ramen", "13.00€", "Hot Chinese-style wheat noodles in meat, fish, miso or soy sauce broth.", menuItems[3], "menu-text");
  createAndAppendMenuText("Sashimi", "8.90€", "Raw sliced fish or meat, aesthetically presented and full of flavour.", menuItems[4], "menu-text");
  createAndAppendMenuText("Sukiyaki", "6.35€", "Chef's recommendation!", menuItems[5], "menu-text");
  createAndAppendMenuText("Takoyaki", "5.00€", "Savory Japanese pancake, with octopus in the middle.", menuItems[6], "menu-text");
  createAndAppendMenuText("Tempura", "9.20€", "Deep fried fish and vegetables, in light batter.", menuItems[7], "menu-text");


  return content;
}

