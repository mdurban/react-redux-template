import React from 'react'
import ChildComponentConnector from '../ChildComponent'

const ParentComponent = ({ sampleActionHandler }) => (
  <div>
    <button onClick={sampleActionHandler}>Dispatch action</button>
    <ChildComponentConnector />
  </div>
)

export default ParentComponent
