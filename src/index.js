import banner from "./banner.js";

(function initial(){
  const content = document.getElementById("content");
  console.log(content);



  content.appendChild(banner());
})();