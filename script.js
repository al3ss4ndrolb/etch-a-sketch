const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let userResponse = prompt("Enter number of squares:");

  if (typeof userResponse == "number" && userResponse <= 1000) {
  } else {
    return "invalid input";
  }
});

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
