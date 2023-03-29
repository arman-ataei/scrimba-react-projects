


import React from 'react';
import memesData from '../assets/memesData'


export default function MemGen(){
    const [allMemes, setAllMemes] = React.useState(memesData)
    // using asyn/awiat inside useEffect
    React.useEffect(()=>{
        async function getData(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data)
        }
        getData()
        // withought async/await 
        // fetch("https://api.imgflip.com/get_memes")
        // .then(res=>res.json())
        // .then(data=>setAllMemes(data))
    }, [])

    let memesArray = allMemes.data["memes"]
    let rand = Math.floor((Math.random())*memesArray.length)
    let initMeme = {
        ...memesArray[rand],
        topText: "Top Text",
        bottomText: "Bottom Text"
    }
    const [_meme, setMeme] = React.useState(initMeme)
    function getMemeImage(){
        rand = Math.floor((Math.random())*memesArray.length)
       setMeme({
        ...memesArray[rand],
        topText: "Top Text",
        bottomText: "Bottom Text"
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