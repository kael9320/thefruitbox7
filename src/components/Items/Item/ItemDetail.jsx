import React from 'react';
import comment from "../../../starts.jpg";

const ItemDetail = ({ item }) => {

    return(
        <>
            <section className="product-details-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="product-image">
                                    <img src={item.img} className="img-fluid" alt="Producto" width="500"/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="product-detail">
                                    <div className="product-details-content">
                                        <h2>{item.name}</h2>
                                        <p className="reference">SKU:<span> {item.sku}</span></p>
                                        <div className="pro-details-rating-wrap">
                                            <img src={comment} className="img-fluid" alt="comment" width="100"/>
                                        </div>
                                        <div className="pricing-meta">
                                            <ul>
                                                <li className="price">S/ {item.price}</li>
                                            </ul>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                    <div class="pro-details-quality mt-0px">
                                        <div class="pro-details-cart btn-hover">
                                            <a href="#"> Agregar al carrito</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default ItemDetail;