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
    if(input=== ""){
      return "Empty";
    } else if ( isNaN(input)){
      return "Not a Number"
    } else if ( !isNaN(input)){
      return "Is a Number"
    } 
}





function formSubmission(
  document,
  list,
  pilot,
  copilot,
  fuelLevel,
  cargoLevel
) {
  list.style.visibility ="hidden"
if(!pilot.value){
 alert("pilot must be filled out correctly ")
}else if( !isNaN(pilot.value)){
  alert("pilot cannot be a number")
}
if (!copilot.value){
  alert("copilot must be filled out correctly");
} else if (!isNaN(copilot.value)){
  alert("copilot cannot be a number")
}
if(!fuelLevel.value){
  alert("Fuel level must be entered")
} else if(isNaN(fuelLevel.value)){
  alert("Fuel level must be a number")
} 
if(!cargoLevel.value){
  alert("Cargo level must be entered")
} else if (isNaN(cargoLevel.value)){
  alert("Cargo level must be a number")
} 
 if (fuelLevel.value < 10000){
   alert("fuel level too low ")
  list.style.visibility = "visible";
  fuelStatus.innerHTML = `Fuel level too low for launch`;
  launchStatus.innerHTML = `Shuttle not ready for launch`;
  launchStatus.style.color = "red";
 }
 if(cargoLevel.value > 10000 ){
   alert("cargo is too heavy")
  list.style.visibility = "visible";
  cargoStatus.innerHTML = `Cargo too heavy for launch`;
  launchStatus.innerHTML = `Shuttle not ready for launch`;
  launchStatus.style.color = "red";
 }
 else if( pilot.value && copilot.value && fuelLevel.value >10000 && cargoLevel.value <10000) {
   alert("shuttle is good to go")
  list.style.visibility="visible";
   pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`
   copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch`
   launchStatus.innerHTML = `Shuttle is ready for launch`;
   launchStatus.style.color= "green";
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
