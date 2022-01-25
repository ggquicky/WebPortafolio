var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");
var globalMediaQuery = window.matchMedia('(min-width:769px)');

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});

function openNav() {
  document.getElementById("navbar").style.width = "100%";
}
if(globalMediaQuery.matches){
  document.getElementById("navbar").style.width = "100%";
}



function closeNav() {
  let mediaQuery = window.matchMedia('(max-width: 768px)');
  if(mediaQuery.matches) {
    document.getElementById("navbar").style.width = "0";
  
  }
}