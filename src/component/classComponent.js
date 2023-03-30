import React, { Component } from 'react'
import '../css/index.css'

class Top extends Component {
    render() {
        return (
            <div>top</div>
        )
    }
}

const Content = () =>  <div className='bgContent'>{12+20}</div>

function Bottom() {
    return (
        <div>bottom</div>
    )
}
export default class classComponent extends Component {
    render() {
        return (
            <div>
                <Top></Top>
                <Content></Content>
                <Bottom></Bottom>
            </div>
        )
    }
}
