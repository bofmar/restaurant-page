export default function contactPage(){
  const content = document.createElement("div");
  content.classList.add("contact-page");

  const addressSide = document.createElement("div");
  addressSide.classList.add("contact-address-wrapper");

  const infoSide = document.createElement("div");
  infoSide.classList.add("contact-info-wrapper");

  const footer = document.createElement("footer");


  content.appendChild(addressSide);
  content.appendChild(infoSide);
  content.appendChild(footer);

  return content;
}