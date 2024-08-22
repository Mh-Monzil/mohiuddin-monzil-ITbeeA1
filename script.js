const headingButton = document.getElementById("headingButton");
const descriptionButton = document.getElementById("descriptionButton");
const imageButton = document.getElementById("imageButton");
const closeHeading = document.getElementById("closeHeading");
const closeDescription = document.getElementById("closeDescription");
const closeImage = document.getElementById("closeImage");
const headingBox = document.getElementById("headingBox");
const descriptionBox = document.getElementById("descriptionBox");
const imageBox = document.getElementById("imageBox");

const headlineInput = document.getElementById("headline");
const descriptionInput = document.getElementById("description");
const imageUploadInput = document.getElementById("imageUpload");
const posterHeadline = document.getElementById("posterHeadline");
const posterDescription = document.getElementById("posterDescription");
const posterImage = document.getElementById("posterImage");

const leftAlignText = document.getElementById("leftAlignText");
const centerAlignText = document.getElementById("centerAlignText");
const rightAlignText = document.getElementById("rightAlignText");
const blueText = document.getElementById("blueText");
const blackText = document.getElementById("blackText");
const greenText = document.getElementById("greenText");

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
imageButton.addEventListener("click", handleVisible(imageButton, imageBox));

// hidden buttons
closeHeading.addEventListener(
  "click",
  handleHidden(closeHeading, headingBox, headingButton)
);
closeDescription.addEventListener(
  "click",
  handleHidden(closeDescription, descriptionBox, descriptionButton)
);
closeImage.addEventListener(
  "click",
  handleHidden(closeImage, imageBox, imageButton)
);

headlineInput.addEventListener("input", () => {
  posterHeadline.textContent = headlineInput.value;
});

descriptionInput.addEventListener("input", () => {
  posterDescription.textContent = descriptionInput.value;
});

imageUploadInput.addEventListener("input", (e) => {
  const imageLink = URL.createObjectURL(e.target.files[0]);
  posterImage.src = imageLink;
});

function handleTextAlign(style) {
  posterHeadline.classList.remove("text-left", "text-center", "text-right");
  posterHeadline.classList.add(style);
}

function handleTextColor(style) {
  posterHeadline.classList.remove(
    "text-blue-500",
    "text-black",
    "text-green-500"
  );
  posterHeadline.classList.add(style);
}

leftAlignText.addEventListener("click", () => handleTextAlign("text-left"));

centerAlignText.addEventListener("click", () => handleTextAlign("text-center"));

rightAlignText.addEventListener("click", () => handleTextAlign("text-right"));

blueText.addEventListener("click", () => handleTextColor("text-blue-500"));

blackText.addEventListener("click", () => handleTextColor("text-black"));

greenText.addEventListener("click", () => handleTextColor("text-green-500"));
