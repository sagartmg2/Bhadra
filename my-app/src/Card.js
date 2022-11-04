

function Card(props) {

    console.log({ props });

    return props.name ? <div className='card'>
        <p>{props.name ? props.name : "no title"}</p>
        <p>stocke</p>
        <p>price</p>
        <p>discounted price</p>
        <p>loream ipsume.... </p>
    </div>
        : null

    return <><h1>card</h1></>

}

export default Card


// Card()