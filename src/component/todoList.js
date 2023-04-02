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
                        return <div key={index}>{item}</div>
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
}
