import React,{useState} from 'react'

const Emojis = () => {
 const arr = ["😀", "😃", "😄", "😁", "😆", "😅",
              "😂", "🤣", "😊", "😇", "🙂", "🙃",
              "😉", "😌", "😍", "😘", "😗", "😙",
              "😚", "😋", "😜", "😝", "😛", "🤑",
              "🤗", "🤓", "😎", "🤡", "🤠", "😏",
              "😒", "😞", "😔", "😟", "😕", "🤢"]
 const [emoji, setEmoji] = useState([])
 const handleClick = () => {
  setEmoji((old) => [...old, arr[Math.floor(Math.random() * 36)]]);
 }
 return (
  <div>
   <h3>{emoji}</h3>
   <button onClick={() => handleClick()} >Add Random Emoji</button>
  </div>
 )
}

export default Emojis