import React,{useState} from 'react'

const Emojis = () => {
 const arrayOfEmojis = ["😀", "😃", "😄", "😁", "😆", "😅",
                        "😂", "🤣", "😊", "😇", "🙂", "🙃",
                        "😉", "😌", "😍", "😘", "😗", "😙",
                        "😚", "😋", "😜", "😝", "😛", "🤑",
                        "🤗", "🤓", "😎", "🤡", "🤠", "😏",
                        "😒", "😞", "😔", "😟", "😕", "🤢"]
 const [emoji, setEmoji] = useState([])
 const handleClick = () => {
  setEmoji((old) => [...old, arrayOfEmojis[0]]);
 }
 return (
  <div>
   <h3>{emoji}</h3>
   <button onClick={() => handleClick()} >Add Random Emoji</button>
  </div>
 )
}

export default Emojis