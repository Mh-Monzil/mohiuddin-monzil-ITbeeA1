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
const downloadPosterButton = document.getElementById("downloadPoster");
const posterCanvas = document.getElementById("posterCanvas");

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

// onchange text
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

let textColor = "";

// text align
function handleTextAlign(style) {
  posterHeadline.classList.remove("text-left", "text-center", "text-right");
  posterHeadline.classList.add(style);
  console.log(style);
}

// text color
function handleTextColor(style) {
  posterHeadline.classList.remove(
    "text-blue-500",
    "text-black",
    "text-green-500"
  );
  posterHeadline.classList.add(style);
  textColor = style;
}

leftAlignText.addEventListener("click", () => handleTextAlign("text-left"));

centerAlignText.addEventListener("click", () => handleTextAlign("text-center"));

rightAlignText.addEventListener("click", () => handleTextAlign("text-right"));

blueText.addEventListener("click", () => handleTextColor("text-blue-500"));

blackText.addEventListener("click", () => handleTextColor("text-black"));

greenText.addEventListener("click", () => handleTextColor("text-green-500"));

// download poster
downloadPosterButton.addEventListener("click", () => {
  const canvasContext = posterCanvas.getContext("2d");
  const posterWidth = 600;
  const posterHeight = 800;

  //set canvas dimensions
  posterCanvas.width = posterWidth;
  posterCanvas.height = posterHeight;

  canvasContext.fillStyle = "#FFFFFF";
  canvasContext.fillRect(0, 0, posterWidth, posterHeight);

  // Set dynamic text color
  let canvasTextColor = "#000000"; // Default color
  if (textColor === "text-blue-500") canvasTextColor = "#3B82F6"; // Blue
  else if (textColor === "text-black") canvasTextColor = "#000000"; // Black
  else if (textColor === "text-green-500") canvasTextColor = "#22C55E"; // Green

  // Set dynamic text alignment
  let textAlign = "left";
  if (posterHeadline.classList.contains("text-left")) textAlign = "left";
  else if (posterHeadline.classList.contains("text-center"))
    textAlign = "center";
  else if (posterHeadline.classList.contains("text-right")) textAlign = "right";

  // Apply text alignment
  canvasContext.textAlign = textAlign;

  // Draw headline with dynamic color and alignment
  canvasContext.font = "bold 36px Arial";
  canvasContext.fillStyle = canvasTextColor;

  // Adjust x-position based on alignment
  let headlineX = 50;
  if (textAlign === "center") headlineX = posterWidth / 2;
  else if (textAlign === "right") headlineX = posterWidth - 50;

  canvasContext.fillText(headlineInput.value, headlineX, 100);

  // Draw description
  canvasContext.font = "24px Arial";
  canvasContext.fillText(descriptionInput.value, 50, 150);

  // Draw image
  const img = new Image();
  img.src = posterImage.src;
  img.onload = function () {
    canvasContext.drawImage(img, 50, 200, 500, 400);

    // Download the poster as an image
    const link = document.createElement("a");
    link.download = "poster.png";
    link.href = posterCanvas.toDataURL("image/png");
    link.click();
  };
});
