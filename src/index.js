import React from 'react'
import PropTypes from 'prop-types'

class RtStar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: props.values,
            currentStar: null,
            inside: false
        }
        this.stars = React.createRef()
        for (let i = 0; i < props.max; i++)
            this["star" + i] = React.createRef()
    }

    componentDidMount() {
        const { max } = this.props
        const that = this

        this.stars.current.addEventListener("mouseenter", _ => {
            that.setState({
                inside: true
            })
        })

        this.stars.current.addEventListener("mouseleave", _ => {
            that.setState({
                inside: false
            })
        })

        for (let i = 0; i < max; i++) {
            this['star' + i].current.addEventListener("mouseenter", e => {
                that.setState({
                    currentStar: e.target.getAttribute('data-value')
                })
            })

            this['star' + i].current.addEventListener("mouseleave", _ => {
                that.setState({
                    currentStar: null
                })
            })

            this['star' + i].current.addEventListener('click', e => {
                let target = e.target.nodeName === "path" ? e.target.parentNode : e.target
                const val = parseInt(target.getAttribute('data-value'))

                that.setState(prevState => {
                    return {
                        values: prevState.values.concat([val])
                    }
                })
            })
        }
    }

    componentDidUpdate() {
        const { values, currentStar, inside } = this.state
        const { max, inactiveColor, activeColor } = this.props

        let currentValue = 0
        if (values.length > 0) 
            currentValue = Math.round(values.reduce((acc, val) => acc + val) / values.length)

        if (inside) {
            if (currentStar == null) {
                for (let i = 0; i < max; i++) {
                    this['star' + i].current.childNodes[0].style = "fill: " + inactiveColor
                }
            } else {
                for (let i = 0; i < currentStar; i++) {
                    this['star' + i].current.childNodes[0].style = "fill: " + activeColor
                }
            }
        } else {
            for (let i = 0; i < max; i++) {
                this['star' + i].current.childNodes[0].style = "fill: " + (i < currentValue ? activeColor : inactiveColor)
            }
        }
    }

    renderStar(key, active) {
        const { inactiveColor, activeColor, size } = this.props

        return (
            <svg 
                key={key}
                data-value={key + 1}
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 896 831.93799"
                ref={this["star" + key]}>
                <path
                    style={{fill: (active ? activeColor : inactiveColor)}}
                    d="M 896,320 582.5,279.219 448,0 313.469,279.219 0,320 230.469,528.875 171,831.938 448,683.126 725.062,831.938 665.5,528.875 Z" />
            </svg>
        )
    }

    renderStars(value) {
        let stars = []
        const { max } = this.props

        for (let i = 0; i < max; i++) {
            if (i < value)
                stars.push(this.renderStar(i, true))
            else
                stars.push(this.renderStar(i, false))
        }
        return stars
    }

    render() {
        const { values } = this.state
        let currentValue = 0
        if (values.length > 0) 
            currentValue = Math.round(values.reduce((acc, val) => acc + val) / values.length)

        return (
            <div ref={this.stars}>
                {this.renderStars(currentValue)}
            </div>
        )
    }
}

RtStar.propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),
    max: PropTypes.number,
    inactiveColor: PropTypes.string,
    activeColor: PropTypes.string,
    size: PropTypes.string
}

RtStar.defaultProps = {
    values: [],
    max: 5,
    inactiveColor: "gray",
    activeColor: "orange",
    size: "30px"
}

export default RtStar