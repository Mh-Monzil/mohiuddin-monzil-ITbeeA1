const headingButton = document.getElementById("headingButton");
const descriptionButton = document.getElementById("descriptionButton");
const closeHeading = document.getElementById("closeHeading");
const closeDescription = document.getElementById("closeDescription");
const headingBox = document.getElementById("headingBox");
const descriptionBox = document.getElementById("descriptionBox");

// visible input box
function handleVisible(visibleButton, box) {
  visibleButton.addEventListener("click", () => {
    box.classList.remove("hidden");
    visibleButton.classList.add("hidden");
  });
}

// visible toggle button and hide input box
function handleHidden(hiddenButton, box, visibleButton) {
  hiddenButton.addEventListener("click", () => {
    box.classList.add("hidden");
    visibleButton.classList.remove("hidden");
  });
}

// visible buttons 
headingButton.addEventListener(
  "click",
  handleVisible(headingButton, headingBox)
);
descriptionButton.addEventListener(
  "click",
  handleVisible(descriptionButton, descriptionBox)
);


// hidden buttons 
closeHeading.addEventListener("click", handleHidden(closeHeading, headingBox, headingButton));

closeDescription.addEventListener("click", handleHidden(closeDescription, descriptionBox, descriptionButton));

