document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const rangeInput = document.querySelector('input[type="range"]');

  rangeInput.addEventListener("input", function () {
    slider.style.setProperty(
      "--value",
      (this.value - this.min + 1) / (this.max - this.min + 1)
    );
  });
});

function sub() {
  alert("submited");
  console.log("clicked");
}
