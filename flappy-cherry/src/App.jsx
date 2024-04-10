import "./App.css";
// import Control from "./flappy_cherry_components/control";
import Game from "./flappy_cherry_components/start_game";

function App() {
  return (
    <div className="App">
      <img src="../assets/images/cherry.webp" className="App-logo" alt="logo" />

      <h1>Flappy Cherry</h1>

      <Game />
    </div>
  );
}

export default App;
