import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
export default function Products({isAuth, activeUser}){
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:3005/products')
        .then(data => data.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
      }, [])
      function addToCart(product) {
        const newCart = {
            product: product.id,
            user: activeUser,
            price: product.price
        };
        fetch('http://localhost:3005/cart', {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(newCart)
        });
    }

      const printProduct = products.map(product => {
        return(
            <div key={product.id} className="Product">
                <h4 className="Product__title">{product.title}</h4>
                <p>{product.description}</p>
                <p>{product.price}</p>
                {isAuth && <button onClick={() => addToCart(product)}>Add to Cart</button>}
            </div>
        )
      })
    return (
        <>
            <h1>Products</h1>
            <div className="Products">
                {printProduct}

            </div>
            {isAuth && <button onClick={() => navigate('/cart')}>Go to Cart</button>}

        </>                

    )
}