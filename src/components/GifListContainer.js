import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifImage, setGifImage] = useState([]);

  var query="";
  function searchGif(link) {
    query = link;
    console.log(query);
    let API_URI=`https://api.giphy.com/v1/gifs/search?q=${query}%20HERE&api_key=dc6zaTOxFJmzC&rating=g`;
    fetch(
        `${API_URI}`
      )
        .then((response) => response.json())
        .then((data) => {
          setGifImage(data.data);
        });
  }


  
  
  
//   useEffect(() => {
//     fetch(
//       `${API_URI}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setGifImage(data.data);
//       });
//   },[]);


  return (
    <div>
      <GifList gifImage={gifImage} />
      <GifSearch searchGif={searchGif} />
    </div>
  );
};

export default GifListContainer;
