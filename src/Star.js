import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Star extends Component {

  static defaultProps = {
    type: "full",
    color: null,
    size: null
  }

  static propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number
  }

  constructor(props) {
    super(props)
  }

  render_star() {
    const { type, color, size } = this.props
    const style = {
      color: (color != null) ? color : "",
      fontSize: (size != null) ? size : "initial"
    }

    if (type === "half") return <i className="fa fa-star-half-o" style={style}/>
    else if (type === "full") return <i className="fa fa-star" style={style}/>
    else return <i className="fa fa-star-o" style={style}/>
  }

  render() {
    return (
      <span>
        {this.render_star()}
      </span>
    )
  }

}

export default Star
