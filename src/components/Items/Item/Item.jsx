import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../../components/ItemCount';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Item = (props) => {

    const onAdd = (quantity) => {
        if (quantity <= 0){
        alert(`No hay productos para agregar`);
        }else{
        alert(`Agregaste ${quantity} unidades al carrito`);
        }
    }

    return (
        <div className="col-lg-4 pb-5">
            <div className="product">
                <Link to={`/category/${props.category}`}><span className="category">{props.category}</span></Link>
                <img src={props.img} className="img-fluid" alt="Producto"/>
                <h3 className="mb-3">{props.name}</h3>
                <p className="price mb-3">S/ {props.price}</p>
                <p>{props.description}</p>
                <ItemCount initial={0} stock={10} onAdd={onAdd} />
                <Link to={`/item/${props.id}`}><Button variant="info">Ver detalle</Button></Link>
            </div>
        </div>
    )
}

export default Item