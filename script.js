const createDivs = () => {
  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    const container = document.querySelector(".container");
    newDiv.classList.add("grid-cell"); // Adds styling class
    container.appendChild(newDiv);

    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "red";
    });
  }
};

createDivs();
console.log("Script loaded");
