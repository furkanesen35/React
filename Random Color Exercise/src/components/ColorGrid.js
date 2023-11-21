import React from 'react'
import RandomColor from './RandomColor'
import "./ColorGrid.css"

const ColorGrid = ({colors}) => {
 return (
  <div className='container'>
   <div className='first-row'>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
   </div>
   <div className='second-row'>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
   </div>
   <div className='third-row'>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
   </div>
   <div className='fourth-row'>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
    <RandomColor colors={colors}/>
   </div>
  </div>
 )
}

export default ColorGrid