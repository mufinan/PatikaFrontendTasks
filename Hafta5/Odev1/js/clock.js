
function showTime() {
  const today = new Date();
  const hour = today.getHours().toString().padStart(2, "0");
  const minute = today.getMinutes().toString().padStart(2, "0");
  const second = today.getSeconds().toString().padStart(2, "0");
  const dayNames = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const day = dayNames[today.getDay()];
  document.getElementById("myClock").innerText = `${hour}:${minute}:${second} ${day}`;
  setTimeout(showTime, 1000);
}

// Prompt the user for their name and set it
const userName = prompt("Adınızı Girin:");
document.getElementById("myName").innerText = userName;

// Start the clock
showTime();
