import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RtStar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      values: props.values
    }
  }

  _addValue(value) {
    this.setState(prevState => {
      return {
        values: prevState.values.concat(parseInt(value))
      }
    })
  }

  _result() {
    const { values } = this.state
    let sum = values.reduce((pv, cv) => (pv + cv), 0)
    return Math.round(sum / values.length)
  }

  _renderStars() {
    const { show, blankStar, fillStar } = this.props
    const result = this._result()

    // Variables
    let stars = []
    let nresult = result

    for (let i = 0; i < show; i++) {
      if (nresult > 0) {
        stars.push(<span key={i}>{fillStar}</span>)
        nresult -= 1
      } else {
        stars.push(<span key={i}>{blankStar}</span>)
      }
    }
    return stars
  }

  render() {
    return (
      <div>
        {this._renderStars()}
      </div>
    )
  }

}

RtStar.propTypes = {
  values: PropTypes.array,
  show: PropTypes.number,
  blankStar: PropTypes.node.isRequired,
  fillStar: PropTypes.node.isRequired 
}

RtStar.defaultProps = {
  values: [],
  show: 5
}

export default RtStar
