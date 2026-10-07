// Assignment 1: Blacksmith — The Tiny Forge
// PLAN: Write a short pseudocode plan for making a sword here.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

// 2. Create the two state variables: heat and swords made.

// 3. Check the forge heat and decide the correct status text.

// 4. Update the page by changing the display values, CSS class, image, and message.

// 5. Reset the forge to its starting values and call updateForge() to draw the page.

const forge = document.getElementById("forge");
const heatDisplay = document.getElementById("heat-value");
const swordCountDisplay = document.getElementById("sword-count");
const statusDisplay = document.getElementById("forge-status");
const forgeImage = document.getElementById("forge-image");
const messageDisplay = document.getElementById("action-message");

let heat = 20;
let swordsMade = 0;

function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Too cold";
  } else if (heatValue < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}

function updateForge() {
  const status = getForgeStatus(heat);

  heatDisplay.textContent = heat;
  swordCountDisplay.textContent = swordsMade;
  statusDisplay.textContent = status;

  forge.classList.remove("is-cold", "is-ready", "is-roaring");

  if (status === "Too cold") {
    forge.classList.add("is-cold");
    forgeImage.src = "assets/forge-cold.svg";
    forgeImage.alt = "A stone forge with dark coals and no flames";
  } else if (status === "Ready to forge") {
    forge.classList.add("is-ready");
    forgeImage.src = "assets/forge-ready.svg";
    forgeImage.alt = "A stone forge with a small orange fire";
  } else {
    forge.classList.add("is-roaring");
    forgeImage.src = "assets/forge-roaring.svg";
    forgeImage.alt = "A stone forge with tall bright flames and sparks";
  }
}

function resetForge() {
  heat = 20;
  swordsMade = 0;
  messageDisplay.textContent = "Welcome to the forge. Add heat to begin.";
  updateForge();
}

function heatForge(amount) {
  heat += amount;

  if (heat > 100) {
    heat = 100;
  }

  messageDisplay.textContent = `The forge is now ${getForgeStatus(heat).toLowerCase()}.`;
  updateForge();
}

function makeSword() {
  if (heat >= 30) {
    heat -= 30;
    swordsMade += 1;
    messageDisplay.textContent = "A sword has been forged!";
  } else {
    messageDisplay.textContent = "The forge isn't hot enough to make a sword. Add more heat.";
  }

  updateForge();
}

resetForge();
