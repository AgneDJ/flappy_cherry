import "./App.css";
import Game from "./flappy_cherry_components/start_game";

function App() {
  return (
    <div className="App">
      <img src="cherry.webp" className="App-logo" alt="logo" />
      <h1>Flappy Cherry</h1>
      {/* <header className="App-header"> */}
      <Game />
      {/* </header> */}
    </div>
  );
}

export default App;
