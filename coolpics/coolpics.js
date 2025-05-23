var modal = document.getElementById("Modal");
var modalImg = document.getElementById("expandedImg");
var closeBtn = document.querySelector(".menu-button");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src.replace(".norris-sm.jpeg", "norris.full.jpeg");
    modalImg.alt = this.alt;
};
closeBtn.onclick = function() {
  modal.style.display = "none";
}
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})