


import React, { Component } from "react"
export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            bonus: 100,
            count: 11,
        }
        // this.count = 11;
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.changeCount = this.changeCount.bind(this)
    }

    increment() {
        console.log("increment");
        console.log("newv...")

        this.setState({
            count: parseInt(this.state.count + 1)
        })

        // console.log(this.state.bonus)
        // this.count = 1222
    }

    decrement() {
        this.setState({
            count: parseInt(this.state.count - 1)
        })
    }

    changeCount(type) {
        this.setState({
            count: type == "add" ? parseInt(this.state.count + 1) : parseInt(this.state.count - 1)
        })
    }

    render() {

        console.log("render");
        return <>
            <h1>class component </h1>
            <h1>counter: {this.state.count} </h1>
            {/* <button onClick={this.increment}>add</button> */}
            {/* <button onClick={this.changeCount("add")}>add</button> */}
            <button onClick={() => { this.changeCount("add") }}>add</button>
            <button onClick={() => this.changeCount("sub")}>decrement</button>
            {/* <button onClick={this.decrement}>subtract</button> */}
        </>
    }
}