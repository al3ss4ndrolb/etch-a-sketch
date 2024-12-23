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

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const userResponse = parseInt(prompt("Enter number of squares:"), 10);
  if (!isNaN(userResponse) && userResponse <= 100) {
    document.querySelector(".container").innerHTML = "";
    createDivs();
  } else {
    return "invalid input";
  }
});

createDivs();
