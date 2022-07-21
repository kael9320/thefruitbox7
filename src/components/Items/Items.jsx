import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item/Item";
import { useParams } from 'react-router-dom';

function Items(props){

  const itemsData =[
    {
      id: 1,
      name: "Producto 1",
      category: "verduras",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-1.jpg",
    },
    {
      id: 2,
      name: "Producto 2",
      category: "promociones",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-2.jpg",
    },
    {
      id: 3,
      name: "Producto 3",
      category: "harina",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-3.jpg",
    },
    {
      id: 4,
      name: "Producto 3",
      category: "promociones",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-4.jpg",
    },
    {
      id: 5,
      name: "Producto 3",
      category: "embolsados",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-5.jpg",
    },
    {
      id: 6,
      name: "Producto 3",
      category: "promociones",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-6.jpg",
    },
  ]

  const { name } = useParams();
  const [items, setItems] = useState([]);
  const promise = new Promise ((resolve) => {
    setTimeout(() => resolve(itemsData), 2000);
  })

  useEffect(() => {
      promise.then((res)=>{
        const products = res;
        if (name){
          setItems(products.filter((product) => product.category == name ));
        }else{
          setItems(products);
        }
      }
      );
    }, [name]
  )

  return (
    <div className="row">
      {items.map((item) => {
        return  <Item key={item.id} id={item.id} name={item.name} img={require(`./Images/${item.img}`)} category={item.category}  price={item.price} description={item.description} />
      })}
    </div>
  );
};

export default Items;