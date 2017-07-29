import React, {Component} from 'react'
import {render} from 'react-dom'

import RtStar from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: "30px",
      color: "#FF3300"
    }
  }

  _sizeChanged(event) {
    let value = event.target.value
    setTimeout(() => {
      this.setState({
        size: value && value + "px" || "30px"
      })
    }, 1000)
  }

  _colorChanged(event) {
    let value = event.target.value
    setTimeout(() => {
      this.setState({
        color: value && value.toString() || "#FF3300"
      })
    }, 1000)
  }

  _addValue(value) {
    const { rtstar } = this.refs
    rtstar._addValue(value)
  }

  render() {
    const { size, color } = this.state

    return (
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h3>Change color & size</h3>
            <hr/>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon" id="size">Size of stars</span>
                <input type="number" 
                  defaultValue={parseInt(size)} 
                  onChange={(event) => this._sizeChanged(event)} 
                  className="form-control" 
                  aria-describedby="size"/>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon" id="color">Color of stars</span>
                <input type="text"
                  aria-describedby="color" 
                  defaultValue={color} 
                  className="form-control"
                  onChange={(event) => this._colorChanged(event)}/>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon" id="nadd">New value to add</span>
                <input type="number" 
                  ref="nadd" 
                  className="form-control"
                  aria-describedby="nadd"/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={() => this._addValue(this.refs.nadd.value)}>
                    Add
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <h3>Result</h3>
            <hr/>
            <RtStar 
              ref="rtstar"
              values={[5]} 
              fillStar={<i className="fa fa-star" style={{fontSize: size, color}}/>} 
              blankStar={<i className="fa fa-star-o" style={{fontSize: size, color}}/>}
              show={5}/>
          </div>

        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
