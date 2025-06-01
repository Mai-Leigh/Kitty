let aantalKliks = 0;
let muziekGestart = false;

const h2 = document.getElementById("teller");
const katAfbeelding = document.getElementById("katje");
const watermeloenButton = document.getElementById("watermeloen-button");
const hamburgerButton = document.getElementById("hamburger-button");
const cookieButton = document.getElementById("cookie-button");
const blijGif = document.getElementById("springKat");
const muziek = document.getElementById("happy");
const melding = document.getElementById("melding");
const hoofdTitel = document.getElementById("titel");
const resetButton = document.getElementById("reset-button");

function watermeloenPlusKnop() {
  if (aantalKliks < 150) {
    aantalKliks = aantalKliks + 1;
    h2.textContent = aantalKliks;
    katAfbeelding.src = "images/watermeloenkat.jpg";
  }

  if (aantalKliks >= 150 && !muziekGestart) {
    blijGif.style.display = "block";
    katAfbeelding.style.display = "none";
    muziek.play();
    muziekGestart = true;
    hoofdTitel.textContent = "Kitty is vol en blij!";

    watermeloenButton.style.display = "none";
    hamburgerButton.style.display = "none";
    cookieButton.style.display = "none";
    resetButton.style.display = "block";
  }
  checkEindscore();
}

function cookiePlusKnop() {
  if (aantalKliks >= 100) {
    aantalKliks = aantalKliks + 5;
    h2.textContent = aantalKliks;
    katAfbeelding.src = "images/cookiekat.jpg";
  } else {
    melding.textContent =
      "Je hebt 100 hapjes van de watermeloen/hamburger nodig voor een cookie!";
    setTimeout(() => {
      melding.textContent = "";
    }, 2000);
  }
  checkEindscore();
}

function hamburgerPlusKnop() {
  if (aantalKliks >= 50) {
    aantalKliks = aantalKliks + 3;
    h2.textContent = aantalKliks;
    katAfbeelding.src = "images/hamburgerkat.jpg";
    melding.textContent = "";
  } else {
    melding.textContent =
      "Je hebt 50 hapjes van de watermeloen nodig voor een hamburger!";
    setTimeout(() => {
      melding.textContent = "";
    }, 2000);
  }
  checkEindscore();
}

function checkEindscore() {
  if (aantalKliks >= 150 && !muziekGestart) {
    blijGif.style.display = "block";
    katAfbeelding.style.display = "none";
    muziek.play();
    muziekGestart = true;
    hoofdTitel.textContent = "Kitty is vol en blij!";

    watermeloenButton.style.display = "none";
    hamburgerButton.style.display = "none";
    cookieButton.style.display = "none";

    resetButton.style.display = "block";
  }
}

watermeloenButton.addEventListener("click", watermeloenPlusKnop);
hamburgerButton.addEventListener("click", hamburgerPlusKnop);
cookieButton.addEventListener("click", cookiePlusKnop);
resetButton.addEventListener("click", () => {
  aantalKliks = 0;
  muziekGestart = false;

  muziek.pause();
  muziek.currentTime = 0;

  h2.textContent = aantalKliks;
  hoofdTitel.textContent = "help kitty met eten";
  katAfbeelding.src = "images/watermeloenkat.jpg";
  katAfbeelding.style.display = "block";
  blijGif.style.display = "none";

  watermeloenButton.style.display = "block";
  hamburgerButton.style.display = "block";
  cookieButton.style.display = "block";
  resetButton.style.display = "none";
});
