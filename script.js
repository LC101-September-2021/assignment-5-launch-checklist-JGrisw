window.addEventListener("load", function () {
  let listedPlanets;
  let chosenPlanet;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      chosenPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        missionTarget,
        chosenPlanet.name,
        chosenPlanet.diameter,
        chosenPlanet.star,
        chosenPlanet.distance,
        chosenPlanet.moons,
        chosenPlanet.image
      );
    });

  form = document.getElementById("launchForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const pilotName = document.querySelector("input[name=pilotName");
    const copilotName = document.querySelector("input[name=copilotName");
    const fuelLevels = document.querySelector("input[name=fuelLevel");
    const cargoMasses = document.querySelector("input[name=cargoMass");
    formSubmission(
      launchStatusCheck,
      faultyItems,
      pilotName,
      copilotName,
      fuelLevels,
      cargoMasses
    );
  });
});
