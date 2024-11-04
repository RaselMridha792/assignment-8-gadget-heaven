import { useEffect, useState } from "react";
import Card from "./Card";

const CartContainer = () => {
    const [products, setProducts] = useState();

    useEffect(()=>{
        const loadData =async ()=>{
            const response = await fetch('./data.json');
            const data = await response.json();
            setProducts(data.products)
        }
        loadData()
    },[]);
    return (
        <>
        {
            products?products.map(product => <Card key={product.product_Id} product={product}></Card>):'not loading'
        }
        </>
    );
};

export default CartContainer;