
// function Count()
// {

import { useState } from "react";

// }



const Count = () => {

    const [products, setProduct] = useState([]);

    const [state, setstate] = useState({
        count: 0
    });

    const [search_term, setSearchTerm] = useState(" ");

    let count = 0;

    function changeCount() {
        setSearchTerm("chang em.....me..")
        // return;
        console.log("change count");
        // count += 1
        // state.count = 1111;
        // if(type)
        setstate({
            count: state.count + 1
        })

        console.log(state.count);

    }

    return (
        <div>
            <>
                <h1>funcational component </h1>
                <h1>counter: {state.count} </h1>

                {/* <button onClick={ changeCount("add") }>add</button> */}
                <button onClick={() => { changeCount("add") }}>add</button>
                <button onClick={() => changeCount("sub")}>decrement</button>
            </>
        </div>
    );
}

export default Count;
