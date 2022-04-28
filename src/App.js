import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import SubmitImage from "./components/SubmitImage";
import SubmitName from "./components/SubmitName";

function App() {
  useEffect(() => {
    try {
      (async function fetchUser() {
        const {
          data: { data: user },
        } = await axios.get("/api/users");
        setUser(user[0]);
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);

  let [user, setUser] = useState({});

  function setImg(image) {
    setUser({ ...user, img: image });
  }

  function setName(name) {
    setUser({ ...user, name: name });
  }

  return (
    <div className="App">
      <img src={`data:image/png;base64,${user.img}`} alt="Avatar"></img>
      <div className="name">{user.name}</div>
      <SubmitImage uid={user.user_id} imageSetter={setImg} />
      <SubmitName uid={user.user_id} nameSetter={setName} />
    </div>
  );
}

export default App;
