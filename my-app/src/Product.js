import React from "react"


export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stock: 0,
            description: "hello world"
        }
        this.price = 100;

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        console.log("handle change");
        console.log(this);
        this.state.stock = "10000111"
        console.log(this.state.stock)
        this.render();
        
        this.setState({
            stock:121212
        })
    }

    render() {
        console.log("render");

        // console.log(this.props);

        return <>
            <h1>Product</h1>
            <h1>{this.props.name}</h1>
            <p>stock:{this.state.stock}</p>
            {/* <button onClick={this.handleChange()}>change</button> */}
            <button onClick={this.handleChange}>change</button>
            <hr />
        </>
    }

}


// export default function Product(props)
// props.name
// export default function Product({name})
// {
//     return <h1>{name}</h1>
// }