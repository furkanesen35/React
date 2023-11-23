import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Emojis = () => {
  const arr = ["😀", "😃", "😄", "😁", "😆", "😅",
              "😂", "🤣", "😊", "😇", "🙂", "🙃",
              "😉", "😌", "😍", "😘", "😗", "😙",
              "😚", "😋", "😜", "😝", "😛", "🤑",
              "🤗", "🤓", "😎", "🤡", "🤠", "😏",
              "😒", "😞", "😔", "😟", "😕", "🤢"];

  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😀" }]);

  const handleClick = () => {
    let rndm = arr[Math.floor(Math.random() * 36)];
    setEmojis((old) => [...old, { id: uuid(), emoji: rndm }]);
  };

  return (
    <div>
      <h3>
       {emojis.map((obj) => {
        return <span key={obj.id}>{obj.emoji}</span>
       })}
      </h3>
      <button onClick={handleClick}>Add Random Emoji</button>
    </div>
  );
};

export default Emojis;