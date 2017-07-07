import React, {Component} from 'react'
import {render} from 'react-dom'

import RtStar from '../../src'

class Demo extends Component {
  render() {
    return (
      <div className="container">
        <h4>5 of 5</h4>
        <RtStar value={5} size={32} max={5}/>
        <hr/>
        <h4>1 of 3</h4>
        <RtStar value={1} size={32} max={3}/>
        <hr/>
        <h4>1.5 of 3</h4>
        <RtStar value={1.5} size={32} max={3}/>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
