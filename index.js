//For intro playing for 3s
  // After 3 seconds, hide the intro and show the main
  
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelector(".intro").style.display = "none";
      document.querySelector(".main").style.display = "block";
    }, 3000);
  });

