function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function togglePopup() {
    var popup = document.getElementById("detailsPopup");
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  }
  
// Close popup when clicking outside of it
  window.onclick = function(event) {
    var popup = document.getElementById("detailsPopup");
    if (event.target === popup) {
      popup.style.display = "none";
    }
  }