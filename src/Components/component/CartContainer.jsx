import { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

const CartContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('../data.json');
            const data = await response.json();
            setProducts(data.products);
            setFilteredProducts(data.products); 
        };
        loadData();
    }, []);

    useEffect(() => {
        if (category) {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }else {
            setFilteredProducts(products);
        }
    }, [category, products]);

    return (
        <>
            {filteredProducts && filteredProducts.map(product => (
                <Card key={product.product_Id} product={product} />
            ))}
        </>
    );
};

export default CartContainer;
