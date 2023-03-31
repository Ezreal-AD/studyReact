import React, { Component } from 'react'
import '../css/index.css'

class Top extends Component {
    render() {
        return (
            <div><button onClick={() => this.clickButton('111')}>点击按钮</button>
            <button onClick={this.showEvent}>点击按钮</button>
            </div>
        )
    }
    clickButton(value) {
        console.log(value)
    }
    showEvent(event){
        console.log(event)  //事件代理 接收到事件
    }
}

const Content = () => <div className='bgContent' onClick={() => {
    console.log('gett?')
}}>{12 + 20}
</div>

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
