window.addEventListener("load", function () {
  let listedPlanets;
  let chosenPlanet;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  form = document.getElementById("launchForm");
  form.addEventListener("submit", function () {
    listedPlanetsResponse
      .then(function (result) {
        listedPlanets = result;
      })
      .then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination

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
    event.preventDefault();
  });
});
