const createDivs = (gridSize) => {
  // function to create grid dinamically
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const cellSize = 500 / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    // Generate grid cells
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-cell"); // Adds styling class
    newDiv.style.width = `${cellSize}px`;
    newDiv.style.height = `${cellSize}px`;

    // Generate random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    newDiv.style.backgroundColor = "black";
    newDiv.style.opacity = "0.3";

    // Add hover effect
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      let currentOpacity = parseFloat(newDiv.style.opacity);
      if (currentOpacity < 1) {
        newDiv.style.opacity = (currentOpacity + 0.1).toString(); // Increase by 0.1
      }
    });
    container.appendChild(newDiv);
  }
};

// Initial grid creation (default 16x16)
createDivs(16);

// Add event listener to the button
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const userResponse = parseInt(
    prompt("Please enter number of squares per side, between 1 and 100:"),
    10
  );

  if (!isNaN(userResponse) && userResponse <= 100) {
    createDivs(userResponse);
  } else {
    alert("Invalid input! Try a number between 1 and 100"); //redirects user
  }
});
