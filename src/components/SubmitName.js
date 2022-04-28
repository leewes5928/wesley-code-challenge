import axios from "axios";

export default function SubmitName({ uid, nameSetter }) {
  async function handleNameChange(e) {
    if (e.keyCode === 13) {
      let response = await axios.patch(`/api/users/${uid}`, {
        name: e.target.value,
      });
      nameSetter(response.data.data[0].name);
      e.target.value = "";
    }
  }

  return (
    <div>
      <input type="text" onKeyDown={handleNameChange}></input>
    </div>
  );
}
