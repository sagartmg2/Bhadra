
// function Count()
// {

import { useState, useEffect } from "react";

// }


function Count(props) {

    // const Count = () => {



    let name = "ram"
    const [products, setProduct] = useState([]);
    if (true) {

    }

    // const [<variable>, <mutatorFunction>] = useState(< initial value >);

    const [state, setstate] = useState({
        count: 0
    });

    const [datas, setData] = useState([])
    /* 
    componentdidmount
    componentdidupdate
 */
    useEffect(() => {
        console.log("use-effect");

        fetch(`https://jsonplaceholder.typicode.com/${props.url}`)
            .then(response => response.json())
            .then(json => setData(json))

    }, [props])

    // }, [])
    // })

    const [search_term, setSearchTerm] = useState(" ");

    let count = 0;

    function changeCount(type) {
        setstate({
            count: state.count + 1
        })
        return;

        console.log("change cou8nt.....");
        name = "changed name value"
        console.log({ name });
        console.log({ products });
        setProduct([1, 2, 3])
        // setstate({
        //     count: state.count + 1
        // })
        return;
        setSearchTerm("chang em.....me..")

        setProduct("asdfasdfadsf")
        // return;
        console.log("change count");
        // count += 1
        // state.count = 1111;
        // if(type)


        console.log(state.count);

    }

    // console.log("props", props);
    console.log("render.");

    return (
        <div>
            <>
                <h1>{props.name}</h1>
                <h1>funcational component </h1>
                <h1>counter: {state.count} </h1>

                {/* <button onClick={ changeCount("add") }>add</button> */}
                <button onClick={() => changeCount("add")}>add</button>
                <button onClick={() => changeCount("minus")}>minus</button>
                {/* <button onClick={() => { changeCount("add") }}>add</button>
                <button onClick={() => changeCount("sub")}>decrement</button> */}
            </>
            <table border="1px">
                <thead>
                    {
                        props.url == "todos"
                            ?
                            <tr>
                                <th>Title</th>
                                <th>Completed</th>
                                <th>Action</th>
                            </tr>
                            :
                            <tr>
                                <th>name</th>
                                <th>username</th>
                                <th>email</th>
                            </tr>


                    }
                </thead>
                <tbody>
                    {
                        datas.map(el => {
                            if (props.url == "users") {
                                return <tr key={el.id}>
                                    <td>{el.name}</td>
                                    <td>{el.username}</td>
                                    <td>{el.email}</td>
                                </tr>
                            }
                            return <tr key={el.id}>
                                <td>tooo</td>
                                <td>tooo</td>
                                <td>tooo</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Count;
