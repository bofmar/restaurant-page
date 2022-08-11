import banner from "./banner.js";
import "./styles/reset.css";
import "./styles/style.css";

(function initial(){
  const content = document.getElementById("content");
  console.log(content);
  content.appendChild(banner());
})();