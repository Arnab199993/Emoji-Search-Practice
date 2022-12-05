import React from "react"
import { useState, useEffect } from "react";
import emoji from "emoji.json"
import './App.css'



console.log(emoji)




export default function App() {
  const [emojiname, setEmojiName] = useState("");
  const [filteremoji, setFilterEmoji] = useState([])
  const [notfound, setNotFound] = useState("")
  const [ok , setOk] = useState(true)




  const handleChange = (e) => {
    setEmojiName(e.target.value)
  }



 useEffect(() => {
    
    if(ok){
       setOk(false)
      return;
    }else{
       setFilterEmoji(emoji.filter(ele => ele.name === emojiname));
       setNotFound("No Emoji Found")
      
    }



  
    
  }, [emojiname])



 





 return (
    <main>
      <h1>Emoji Search</h1>



     <input type={"text"} onChange={handleChange} />





     {filteremoji[0] ? filteremoji.map(ele => (
        <li key={ele.char}>{ele.name} {ele.char}</li>
      )) : <p>{notfound}</p>}



   </main>
  )
}