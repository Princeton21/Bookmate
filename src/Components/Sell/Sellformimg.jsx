import { useState} from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  
} from "firebase/storage";
import { storage } from "../../Firebase/Utilities";
import { v4 } from "uuid";

function Sellformimg({ setNewUrl}) {
  
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  // const [newUrl,setnewUrl] = useState("");
  const types = ['image/jpg','image/jpeg','image/png','image/PNG'];
  const [imgError, setImgError] = useState('');


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
        onChange={(e) => {
          let selectedFile = e.target.files[0];
          // setImageUpload(selectedFile);
          if(selectedFile){
              if(types.includes(selectedFile.type)){
                  setImageUpload(selectedFile);
                  setImgError('Your image has successfully been uploaded');
              }
              else{
                  setImageUpload(null);    
                  setImgError('please select a valid image file type!!');
              }
          }
          else {
              console.log('please select your file')
          }
        }}
      />
      {imgError &&  <>
                      <br />
                      <div className="error-msg">
                          {imgError}
                      </div>
                    </>}
      <button onClick={uploadFile}> Upload Image</button>
    </div>
  );
} 

export default Sellformimg;
