import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import SubmitImage from './components/SubmitImage';
import SubmitName from './components/SubmitName';

function App() {
  useEffect(()=> {
    (async function fetchUser() {
      const { data: { data: user }} = await axios.get("/api/users");
      setUser(user[0]);
    })();
  },[]);

  let [user, setUser] = useState({});

  return (
    <div className="App">
      {user.name}
      <img src={`data:image/png;base64,${user.img}`} alt="Avatar"></img>
      <SubmitImage userSetter={setUser} />
      <SubmitName userSetter={setUser} />
    </div>
  );
};

export default App;
