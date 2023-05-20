import "./App.css";
import { Breeds } from "./Breeds";

function App() {
  const images = [];
  for (const breedName in Breeds) {
    images.push(
      <img
        key={breedName}
        className={breedName}
        alt={breedName}
        src={Breeds[breedName].image}
        ariaLabel={breedName}
        role="button"
        onClick={displayFact}
      />
    );
  }

  function displayFact(e) {
    console.log("In displayFact", e);
    const animalName = e.target.alt;
    const optionIndex = Math.floor(
      Math.random() * Breeds[animalName].facts.length
    );
    const funFact = Breeds[animalName].facts[optionIndex];
    document.getElementById("fact").innerHTML = funFact;
  }

  return (
    <div className="App">
      <h1>Guard Dog Facts</h1>
      <h3>(click on the dogs to get facts)</h3>
      <h3 id="fact"></h3>
      {images}
    </div>
  );
}

export default App;
