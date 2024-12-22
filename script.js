const createDivs = () => {
  for (let i = 0; i < 16 * 16; i++) {
    const newDiv = document.createElement("div");
    const container = document.querySelector(".container");
    newDiv.setAttribute("style", "padding: 100px; margin: 100px;");
    container.appendChild(newDiv);
  }
};

createDivs();
console.log("Script loaded");
