import "./App.css";
import Background from "./flappy_cherry_components/background";

function App() {
  return (
    <div className="App">
      <img src="cherry.webp" className="App-logo" alt="logo" />
      <h1>Flappy Cherry</h1>
      <header className="App-header">
        <Background />
      </header>
    </div>
  );
}

export default App;
