import ErrorBoundary from "./components/ErrorBoundary";
import Weather from "./components/Weather";
import "tachyons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather Finder</h1>
        <h2>Find out tempature, conditions and more..</h2>
      </header>
      <ErrorBoundary>
        <Weather />
      </ErrorBoundary>
      <h3>Made With &hearts; By Sapir Abutbul</h3>
    </div>
  );
}

export default App;
