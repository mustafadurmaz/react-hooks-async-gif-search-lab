import React,{useState} from 'react';

const GifSearch = ({searchGif}) => {
    console.log(searchGif);
    const [query, setQuery] = useState("")

    function sendLink(e){
        e.preventDefault()
        searchGif(query)
    }
  return(
    <div>
        <form>
            <label>Enter a Search Term </label>
            <br/>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} ></input>
            <br/>
            <button onClick={sendLink} type='submit'>Find Gifts</button>
        </form>
    </div>
  )
};

export default GifSearch;
