import "./App.css";
// import Control from "./flappy_cherry_components/control";
import Game from "./flappy_cherry_components/start_game";

function App() {
  return (
    <div className="App">
      {/* Displays app logo image (rotating cherry/cloud) */}
      <img src="../assets/images/cherry.webp" className="App-logo" alt="logo" />
      {/* App title */}
      <h1>Flappy Cherry</h1>
      {/* Runs Game component */}
      <Game />
    </div>
  );
}

export default App;
