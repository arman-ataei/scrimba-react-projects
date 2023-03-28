


import React from 'react';
import memesData from '../assets/memesData'


export default function MemGen(){
    let memesArray = memesData.data["memes"]
    let rand = Math.floor((Math.random())*memesArray.length)
    let initMeme = {
        ...memesArray[rand],
        topText: "top text",
        bottomText: "bottom text"
    }
    const [_meme, setMeme] = React.useState(initMeme)
    function getMemeImage(){
        rand = Math.floor((Math.random())*memesArray.length)
       setMeme({
        ...memesArray[rand],
        topText: "",
        bottomText: ""
        })
    }
function handleText(event){
    event.preventDefault()

    setMeme(prevMeme=>({
        ...prevMeme,
        [event.target.name]: event.target.value
    }))
}
    return(
        <main className='d-flex flex-column align-items-center'>
            <div className="d-flex flex-column my-4 p-2 justify-content-center ">
                <div className="d-flex flex-row mb-2 mem--form">
                    <input 
                        type="text" 
                        name='topText'
                        value={_meme.topText}
                        placeholder='top text' 
                        className="form-control me-2" 
                        id="topText" 
                        aria-describedby="topText"
                        onChange={handleText}
                    />
                    <input 
                        type="text" 
                        name='bottomText'
                        value={_meme.bottomText}
                        placeholder='bootom text' 
                        className="form-control" 
                        id="bottomText" 
                        aria-describedby="bottomText" 
                        onChange={handleText}

                    />
                </div>
                <input 
                    onClick={getMemeImage}
                    className="p-2 mem--button rounded" 
                    type="button" value="Get A New Meme Image"  
                />
            </div>
            <div className="meme--img">
                <img 
                    src={_meme.url}
                    alt=""
                    srcSet=""
                    className=' px-4'

                />
                <h2 className="meme--text top">{_meme.topText}</h2>
                <h2 className="meme--text bottom">{_meme.bottomText}</h2>

            </div>
        </main>
        

    )
}