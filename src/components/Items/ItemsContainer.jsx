import React, { useState , useEffect } from "react";
import ItemDetail from "./Item/ItemDetail";
import { useParams } from 'react-router-dom';
import detailedItems from './utils/details.json';

const ItemsContainer = () =>{

  const [item, setItems] = useState([]);
  const params = useParams();
  const promise = new Promise ((res, rej) => {
    setTimeout(() => res(detailedItems), 2000);
  })

  useEffect(() => {
      promise.then((response) => {
        const foundItem = response.filter((item) => item.id == params.id );
        setItems(foundItem[0]);
      });
    }, []);
  return <ItemDetail item={item} />;
};

export default ItemsContainer;