const shareBox = document.querySelector(".share-box");
const arrowContainer = document.querySelector(".arrow-container");
const arrow = document.querySelector(".arrow");

function showShare() {
  if (shareBox.style.opacity === "0") {
    shareBox.style.opacity = "1";
    arrowContainer.style.backgroundColor = "hsl(214 17% 45%)";
    arrow.style.color = "hsl(210, 46%, 95%)";
  } else {
    shareBox.style.opacity = "0";
    arrowContainer.style.backgroundColor = "hsl(210, 46%, 95%)";
    arrow.style.color = "hsl(214 17% 45%)";
  }
}
