import axios from 'axios';
import { createRef } from "react";

export default function SubmitImage({ uid, imageSetter }) {
  let imageRef = createRef();

  function handleClick() {
    imageRef.current.click();
  };

  function handleUpload(e) {
    let image = e.target.files[0];
    let reader = new FileReader();

    reader.readAsBinaryString(image);
    reader.onload = async function() {
        let imageString = btoa(reader.result);
        await imageSetter(imageString);
    };
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} ref={imageRef} style={{ display: "none" }}></input>
      <button onClick={handleClick}>Upload Avatar</button>
    </div>
  );
};
