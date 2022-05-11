import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  
} from "firebase/storage";
import { db, storage } from "../../Firebase/Utilities";
import { v4 } from "uuid";

function Sellformimg({ setNewUrl}) {
  
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  // const [newUrl,setnewUrl] = useState("");


  const imagesListRef = ref(storage, "images/");
  const uploadFile = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setNewUrl(url);
        console.log(url);
      });
    });
  };
  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
    </div>
  );
} 

export default Sellformimg;
