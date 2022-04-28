import './App.css';
import SubmitImage from './components/SubmitImage';
import SubmitName from './components/SubmitName';

function App() {
  return (
    <div className="App">
      Name
      <img alt="Avatar Image"></img>
      <SubmitImage />
      <SubmitName />
    </div>
  );
}

export default App;
