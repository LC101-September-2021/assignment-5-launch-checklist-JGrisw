// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  document.innerHTML = `
  <h2>Mission Destination</h2>
    <ol>
       <li>Name: ${name} </li>
       <li>Diameter: ${diameter} </li>
       <li>Star: ${star} </li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `;
}

function validateInput(input) {
  if (input === "") {
    return "Empty";
  } else if (isNaN(input)) {
    return "Not a Number";
  } else if (!isNaN(input)) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  list.style.visibility = "hidden";
  if (!pilot.value || !copilot.value || !fuelLevel.value || !cargoLevel.value) {
    alert("All fields must be filled out!");
  } else if (
    !isNaN(pilot.value) ||
    !isNaN(copilot.value) ||
    isNaN(fuelLevel.value) ||
    isNaN(cargoLevel.value)
  ) {
    alert("Make sure to enter valid information for each field!");
  }

  if (fuelLevel.value < 10000 && cargoLevel.value < 10000) {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch`;
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = "red";
  }
  if (cargoLevel.value >= 10000 && fuelLevel.value >= 10000) {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch`;
    cargoStatus.innerHTML = `Cargo too heavy for launch`;
    fuelStatus.innerHTML = "Fuel Level high enough for launch";
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = "red";
  }
  if (cargoLevel.value >= 10000 && fuelLevel.value < 10000) {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch`;
    cargoStatus.innerHTML = `Cargo too heavy for launch`;
    fuelStatus.innerHTML = "Fuel Level too low for launch";
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = "red";
  }
  if (
    pilot.value &&
    copilot.value &&
    fuelLevel.value >= 10000 &&
    cargoLevel.value < 10000
  ) {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch`;
    fuelStatus.innerHTML = "Fuel Level high enough for launch";
    cargoStatus.innerHTML = "Cargo Level low enough for launch";
    launchStatus.innerHTML = `Shuttle is ready for launch`;
    launchStatus.style.color = "green";
  }
}

async function myFetch() {
  const response = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  );
  const json = await response.json();
  return json;
}

function pickPlanet(planets) {
  let pickedPlanet = planets[Math.floor(Math.random() * planets.length)];
  return pickedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
