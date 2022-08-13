import { createAndAppendText, createAndAppendImage, createDivWithClass } from "./helpers";
import Map from "./assets/img/paphos-map.png";

export default function contactPage(){
  const content = document.createElement("div");
  content.classList.add("contact-page");

  // Address side
  const addressSide = document.createElement("div");
  addressSide.classList.add("contact-address-wrapper");
  
  const addressTextDiv = createDivWithClass("address-text-wrapper");
  createAndAppendText("h1", addressTextDiv, "Address");
  createAndAppendText("p", addressTextDiv, "123 Fake Street Avenue");
  createAndAppendText("p", addressTextDiv, "Paphos, CY");
  createAndAppendText("p", addressTextDiv, "66357");
  addressSide.appendChild(addressTextDiv);

  createAndAppendImage(Map,addressSide, "map");

  // Info side
  const infoSide = document.createElement("div");
  infoSide.classList.add("contact-info-wrapper");

  const hoursText = createDivWithClass("hours-wrapper")
  createAndAppendText("h1", hoursText, "Working Hours");
  createAndAppendText("p", hoursText, "Tuesday: 12:00 - 22:00");
  createAndAppendText("p", hoursText, "Wednesday: 12:00 - 22:00");
  createAndAppendText("p", hoursText, "Thursday: 12:00 - 22:00");
  createAndAppendText("p", hoursText, "Friday: 12:00 - 23:30");
  createAndAppendText("p", hoursText, "Saturday: 12:00 - 23:30");
  createAndAppendText("p", hoursText, "Sunday: 12:00 - 23:30");
  infoSide.appendChild(hoursText);

  const contactDetails = createDivWithClass("contact-details");
  createAndAppendText("h1", contactDetails,"Contact Us");
  createAndAppendText("p", contactDetails,"Phone Number: +357 12345678");
  createAndAppendText("p", contactDetails,"Email: samisen@fakemail.not");
  infoSide.appendChild(contactDetails);

  content.appendChild(addressSide);
  content.appendChild(infoSide);

  return content;
}






