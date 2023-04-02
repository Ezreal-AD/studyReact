import React, { Component } from 'react'
import '../css/index.css'

class Top extends Component {
    refValue = React.createRef()
    render() {
        return (
            <div className='topBox'><button onClick={() => this.clickButton('111')}>点击按钮</button>
                <button onClick={this.showEvent}>点击按钮</button>
                <button ref={this.refValue} onClick={() => this.showRef()}>展示ref</button>
                <TopTitle></TopTitle>
            </div>
        )
    }
    clickButton(value) {
        console.log(value)
    }
    showEvent(event) {
        console.log(event)  //事件代理 接收到事件
    }
    showRef() {
        console.log(this.refValue.current, 'refValue')
    }
}
class TopTitle extends Component {
    state = {
        isShow: true,
        spanValue: '是的',
        arrList: ['1', '2', '3']
    }
    render() {
        var mapArr = this.state.arrList.map((item) => <div>{item}</div>)

        return (
            <div>
                <span>{this.state.isShow ? '214' : 'xxx'}</span>
                <div onClick={() => this.changeSpan()}>切换</div>
                <div >{mapArr}</div>
            </div>)
    }
    changeSpan() {
        this.setState({ isShow: !this.state.isShow })
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
