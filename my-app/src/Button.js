function Button(props) {
    console.log( props )
    // props.text = "chgange the text"

    let obj = {...props}
    obj.text = "change d...."
    return <button>{obj.text}</button>
}
// function Button({text}) {
//     // console.log( props )

//     return <button>{text}</button>
//     // return <button>{props.text}</button>
// }

export function Button2() {
    return <button>button2</button>

}

export function Button33() {
    return <button>button3</button>

}

export default Button
// export default Button2

