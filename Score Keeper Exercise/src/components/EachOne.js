import React, { useState } from 'react'

const EachOne = (props) => {
 const [score, setScore] = useState(0)
 return (
  <div>
   Player {props.q}: {score}
  </div>
 )
}

export default EachOne