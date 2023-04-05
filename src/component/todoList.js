import React, { Component } from 'react'
import '../css/index.css'


export default class todoList extends Component {
    state = {
        list: ['l1', 'a2', 'b3']
    }
    inputRef = React.createRef()
    htmlText='<h1>htmlpianduan</h1>'
    render() {
        return (
            <div>
                <div><input ref={this.inputRef}></input><button onClick={() => this.addList('va')}>添加</button></div>
                <div>
                    {this.state.list.map((item, index) => {
                        return <div key={index}><span>{item}</span><button onClick={() => {
                            this.delData(index)
                        }}>删除</button></div>
                    })}
                    <div className={this.state.list.length !== 0 && 'hidden'}>暂无数据</div>
                    {/* 富文本解析 */}
                    <div dangerouslySetInnerHTML={{
                        __html: this.htmlText
                    }}></div>
                </div>
            </div>
        )
    }
    addList(value) {
        var newList = [...this.state.list]
        newList.push(this.inputRef.current.value)
        this.setState({
            list: newList
        })
    }
    delData(index) {
        var newList = this.state.list.slice()
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
}
