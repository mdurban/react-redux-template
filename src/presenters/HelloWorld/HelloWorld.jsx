import React from 'react'
import ChildComponentConnector from '../../connectors/ChildComponentConnector'
 
const HelloWorld = ({ buttonAction }) => (
  <div>
    <button onClick={ buttonAction }>Action</button>
    <ChildComponentConnector />
  </div>
)

export default HelloWorld
