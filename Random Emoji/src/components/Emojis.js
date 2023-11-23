import React,{useState} from 'react'

const Emojis = () => {
 const emojis = ["😀", "😃", "😄", "😁", "😆", "😅",
                 "😂", "🤣", "😊", "😇", "🙂", "🙃",
                 "😉", "😌", "😍", "😘", "😗", "😙",
                 "😚", "😋", "😜", "😝", "😛", "🤑",
                 "🤗", "🤓", "😎", "🤡", "🤠", "😏",
                 "😒", "😞", "😔", "😟", "😕", " 🤢"]
 const [emoji, setEmoji] = useState([])
 const handleClick = () => {
  return
 }
 return (
  <div>
   <h3>{emoji}</h3>
   <button>Add Random Emoji</button>
  </div>
 )
}

export default Emojis