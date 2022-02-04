import React from 'react';

const GifList = ({gifImage}) => {
    const gifsList = gifImage.map(gif => {
        return (
            <li key={gif.id}>
                <img src={gif.images.original.url} alt={gif.slug} />
            </li>
        )
    })
  
  return(
    <div>
        <ul>
            {gifsList[0]}
            {gifsList[1]}
            {gifsList[2]}
        </ul>
    </div>
  )
};

export default GifList;
