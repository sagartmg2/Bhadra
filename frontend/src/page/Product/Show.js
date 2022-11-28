import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Show = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({});
    const [review, setReview] = useState({
        rating: 0,
        comment: ""
    });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/products/${id}`)
            .then(res => {
                setProduct(res.data.data)
            })
    }, []);

    if (!product._id) {
        return <>Loading....</>
    }


    const brands_mapping = product.brands?.map(brand => {
        return <span class="badge bg-secondary mx-2">{brand}</span>
    })
    const categories_mapping = product?.categories?.map(brand => {
        return <span class="badge bg-secondary mx-2">{brand}</span>
    })

    const updateReview = () => {
        console.log("update review");
    }

    return (
        <div>
            {id}
            <div className='row'>
                <div className='col-md-6'>
                    {/* {
                        JSON.stringify(product.images)
                    } */}
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="http://res.cloudinary.com/dtv8dtpkm/image/upload/v1668254736/neyp5bi9urkncemhwjyn.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="http://res.cloudinary.com/dtv8dtpkm/image/upload/v1668254736/neyp5bi9urkncemhwjyn.jpg" class="d-block w-100" alt="..." />
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>



                </div>
                <div className='col-md-6'>
                    <p>name: {product.name}</p>
                    <p>price: ${product.price}</p>
                    <p>brands: {brands_mapping}</p>
                    <p>categories: {categories_mapping}</p>
                    <p>in_stock: {product.in_stock}</p>
                    <p>description: {product.description}</p>
                    <hr />
                    <button>add to cart</button>
                </div>
            </div>
            <hr />
            <div>
                <h2>Reviews</h2>
                {
                    product.reviews.length == 0
                        ?
                        <p>No reviews yet.</p>
                        :
                        product.reviews.map(review => {
                            return <>
                                review
                            </>
                        })
                }
                <hr />
                <form onSubmit={updateReview}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Rating *</label>
                        <input min={1} max={5} className="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">comment</label>
                        <textarea className='form-control'>{review.comment}</textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>


        </div>
    );
}

export default Show;
