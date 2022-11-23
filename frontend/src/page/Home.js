import axios from 'axios';
import { useState, useEffect } from 'react';
import noImage from "../asset/no-image.jpg"

const Home = () => {

    const [products, setProducts] = useState([]);

    function fetchProducts() {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/products?page=2`)
            .then(res => {
                console.log(res)
                setProducts(res.data.data[0].data)
            }).catch(err => {

            })
    }

    useEffect(() => {
        fetchProducts()
    }, []);


    return (
        <div className='row'>
            {
                products.map(product => {
                    return <div className=" col-md-3 p-3" >
                        <div className='card'>
                            {/* <img src={noImage} className="card-img-top img-thumbnail" alt="..." /> */}
                            {
                                product.images.length == 0
                                    ?
                                    <img src={require("../asset/no-image.jpg")} className="card-img-top img-thumbnail" alt="..." />
                                    :
                                    <img src={`${product.images[0]}`} className="card-img-top img-thumbnail" alt="..." />



                            }
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Rs.{product.price}</p>
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>

    );
}

export default Home;
