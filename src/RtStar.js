import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

class RtStar extends Component {

  static defaultProps = {
    value: 0,
    max: 5,
    size: 16,
    color: "#FFBF00"
  }

  static propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    size: PropTypes.number,
    color: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  generateStars() {
    const { max, value, size, color } = this.props

    let stars = []
    for (let i = 0; i < max; i++) {
      const val = value - i
      if (Math.trunc(val) >= 1) stars.push(<Star size={size} color={color} key={i}/>)
      else if (val < 1 && val > 0) stars.push(<Star type="half" size={size} color={color} key={i}/>)
      else stars.push(<Star type="empty" size={size} color={color} key={i}/>)
    }
    return stars
  }

  render() {
    return (
      <div>
        {this.generateStars()}
      </div>
    )
  }

}

export default RtStar
