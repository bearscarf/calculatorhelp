// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  document.getElementById("result").value += value;
}
// Swaps the style sheet in order to  achieve dark mode.
function switchTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "light.css") {
    theme.href = "dark.css";
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = "light.css";
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}

const morebtn = document.querySelector('.more');
const h2 = document.querySelector('.h2');
morebtn.addEventListener('click',(e)=>{
    h2.classList.toggle('show-more');
    if(morebtn.innerText === "collapse"){
        morebtn.innerText = "read more";
    }else{
        morebtn.innerText = "collapse";
    }
})


