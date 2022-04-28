import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import SubmitImage from './components/SubmitImage';
import SubmitName from './components/SubmitName';

function App() {
  useEffect(()=> {

    (async function fetchUser() {
      const { data: { data: user }} = await axios.get("/api/users");
    })();
    
  },[]);
  
  return (
    <div className="App">
      Name
      <img alt="Avatar"></img>
      <SubmitImage />
      <SubmitName />
    </div>
  );
}

export default App;
