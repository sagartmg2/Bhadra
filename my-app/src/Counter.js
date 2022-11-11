


import React, { Component } from "react"
export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bonus: 100,
            count: 11,
            todos: [
                { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
                { userId: 1, id: 2, title: 'delectus aut autem', completed: false },
            ]
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

    componentDidMount() {
        console.log("did mount");

        fetch(this.props.url)
            .then(response => response.json())
        // .then(json => console.log(json))
    }


    componentDidUpdate(prevProps, prevState) {


        console.log("did update");
        if (prevProps.url != this.props.url) {
            fetch(this.props.url)
                .then(response => response.json())
            // .then(json => console.log(json))

        }
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
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(todo => {
                            return <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.completed}</td>
                                <td><button>delete</button></td>
                            </tr>
                        })
                    }

                    {/* <tr>
                        <td>two</td>
                        <td>truee</td>
                    </tr> */}
                </tbody>
            </table>
        </>
    }
}