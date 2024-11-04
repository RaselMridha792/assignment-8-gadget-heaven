import { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

const CartContainer = () => {
    const [products, setProducts] = useState();
    const {id} = useParams()

    useEffect(()=>{
        const loadData =async ()=>{
            const response = await fetch('./data.json');
            const data = await response.json();
            setProducts(data.products)
        }
        loadData()
    },[]);
    console.log(products);
    return (
        <>
        {
            products?products.map(product => <Card key={product.product_Id} product={product}></Card>):'not loading'
        }
        </>
    );
};

export default CartContainer;