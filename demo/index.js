import React from 'react'
import ReactDOM from 'react-dom'
import RtStar from '../src/index'

ReactDOM.render(
    <RtStar onStateChanged={(values) => console.log(values)} />,
    document.getElementById("app")
)