export function createAndAppendText(type,target,message){
  const text = document.createElement(type);
  text.innerText = message;
  target.appendChild(text);
}

export function createAndAppendImage(path,target,name){
  const image = new Image();
  image.src = path;
  image.classList.add(name);
  target.appendChild(image);
}

export function createButton(name){
  const button = document.createElement("button");
  button.setAttribute("id", name); //we need the id for switching the pages

  button.innerText = name.toUpperCase().split("-")[0];

  return button;
}

export function createDivWithClass(name){
  const newDiv = document.createElement("div");
  newDiv.classList.add(name);

  return name;
}