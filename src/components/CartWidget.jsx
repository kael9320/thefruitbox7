import cart from "../cart.png";
const  CartWigdet = () => {
    const count= 4;
    return (
        <>
            <img src={cart} alt="Carrito" />
            <span>{count}</span>
        </>
    );
}

export default CartWigdet;