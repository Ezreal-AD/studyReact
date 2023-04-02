import React, { Component } from 'react'

export default class todoList extends Component {
    state = {
        list: ['l1', 'a2', 'b3']
    }
    inputRef = React.createRef()
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
