import React, { useEffect, useState } from "react";
import axios from 'axios';
import './meme.css'


export default function Meme(){

    const [memesData, setmemesData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Make an API GET request
      axios.get('https://api.imgflip.com/get_memes')
        .then((response) => {
          setmemesData(response.data);
        })
        .catch((err) => {
          setError(err);
        });
    }, []);

    
    


    // console.log(memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url);


    const [meme , setMeme]= React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/265k.jpg"
    });

    

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =  memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
    }
    function handleChange(event){
        setMeme(prev =>({
            ...prev,
            [event.target.name] : event.target.value

        }))
    }
    // console.log(meme)
    return(
        <main>
            <div className="form">
                <input type = "text" name="topText" placeholder="Upper Text" onChange={handleChange} 
                value = {meme.topText}/>
                <input type = "text" name="bottomText" placeholder="Lower Text" onChange={handleChange} 
                value = {meme.bottomText}/>
                <button onClick={getMemeImage}>Get a new Meme Image</button>
            </div>
            <div className="meme">
                <div className="container"><img src={meme.randomImage} className="meme--image" />
                
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}