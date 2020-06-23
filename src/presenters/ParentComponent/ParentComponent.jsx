import React from 'react'
import ChildComponentConnector from '../../connectors/ChildComponentConnector'

const ParentComponent = ({ buttonAction }) => (
  <div>
    <button onClick={buttonAction}>Action</button>
    <ChildComponentConnector />
  </div>
)

export default ParentComponent
