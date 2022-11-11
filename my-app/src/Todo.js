import React, { useState } from 'react';

const Todo = () => {

    // let todos = []

    const [todos, setTodo] = useState(["one", "two"]);

    const [input, setInput] = useState("")

    function addTodo() {

        setTodo([...todos, input])
        setInput("")

        /* 
            todos.push(document.getElementById("todo-input").value)
            console.log({ todos })

            let str = ""
            todos.forEach(todo => {
                str += `<li>${todo}</li>`
            })
            document.getElementById("list").innerHTML = str
         */


    }


    // let arr1 = [1,2,3]


    // TODO:// console.log(arr1);
    // arr1 =  arr1.map(el => el*2 )
    // arr1 =  arr1.map(el => {return el*2} )
    //  => [3,6,18]

    // let arr2 = ["ram","hari"]
    // name is ram
    // name is hari
    // arr2.map(el => ``)


    return (
        <>
            <div>
                <input onChange={(e) => { setInput(e.target.value) }} type="text" placeholder='new todo' id="todo-input" value={input} />
                <button onClick={addTodo}> add todo</button>
            </div>
            {/* <div id="list">
                <li>todo..lsit 1</li>
            </div> */}
            todo list.....
            {/* {
                todo
            } */}

            <ul>
                {
                    todos.map(todo => {
                        return <li>{todo}</li>
                    })
                }

                {/* <li>one</li>
                <li>two</li>
                <li>two</li>
                <li>two</li> */}
            </ul>
        </>
    );
}

export default Todo;
