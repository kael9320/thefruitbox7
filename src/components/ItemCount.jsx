import { useState } from "react";
import { Button } from "react-bootstrap";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count , setCount] = useState(initial);
    // const count = 0;
    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div className="counter mb-3">
                <Button variant="secondary" disabled={count <= 1} onClick={decrease}>-</Button>
                <span>{count}</span>
                <Button variant="secondary" disabled={count >= stock} onClick={increase}>+</Button>
            </div>
            <Button variant="primary" disabled={stock <= 0} onClick={() => onAdd(count)}>Añadir al carrito</Button>
        </>
    );
}

export default ItemCount;