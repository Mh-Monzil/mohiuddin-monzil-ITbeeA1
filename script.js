const headingButton = document.getElementById("headingButton");
const closeHeading = document.getElementById("closeHeading");
const headingBox = document.getElementById("headingBox");

headingButton.addEventListener("click", (e) => {
    headingBox.classList.remove("hidden")
    headingButton.classList.add("hidden")
})

closeHeading.addEventListener("click", (e) => {
    headingBox.classList.add("hidden")
    headingButton.classList.remove("hidden")
})