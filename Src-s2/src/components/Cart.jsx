import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartItem = ({ cart, setCarts, carts, activeUser }) => {
  const [quantity, setQuantity] = useState(cart.quantity || 1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeItem = () => {
    fetch(`http://localhost:3005/cart/${cart.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      console.log(`Cart ${cart.id} deleted`);
      setCarts(carts.filter(c => c.id !== cart.id));
    })
    .catch(error => {
      console.error(`Error deleting cart ${cart.id}:`, error);
    });
  };

  return (
    <div className="Product_cart">
      <h4 className="Product__title">Product: {cart.product}</h4>
      <p>Price: {cart.price}</p>
      <div className="quantity__editor">
        <button onClick={increaseQuantity}>+</button>
        <span>{quantity}</span>
        <button onClick={decreaseQuantity}>-</button> 
      </div>

      <button onClick={removeItem}>Remove</button>
    </div>
  );
};

export default function Cart({ activeUser }) {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3005/cart')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching cart');
        }
        return response.json();
      })
      .then(data => {
        let filteredCarts = data.filter(cart => cart.user === activeUser);
        setCarts(filteredCarts);
      })
      .catch(error => console.error('Error fetching cart:', error));
  }, [activeUser]);

  const printCarts = carts.map((cart, index) => (
    <CartItem key={cart.id} cart={cart} activeUser={activeUser} setCarts={setCarts} carts={carts} />
  ));

  function makeOrder() {
    let products = [];
    let sum = 0;
    carts.forEach(cart => {
      products.push({ name: cart.product, price: cart.price });
      sum += cart.price;
    });
  
    const newOrder = { products, user: activeUser, total_price: sum };
    fetch('http://localhost:3005/order', {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(newOrder)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error creating order');
      }
      return response.json();
    })
    .then(data => {
      console.log('Order created:', data);
      carts.forEach(cart => {
        if (cart.user === activeUser) {
            fetch(`http://localhost:3005/cart/${cart.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
              })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error: ${response.status}`);
            }
            console.log(`Cart ${cart.id} deleted`);
          })
          .catch(error => {
            console.error(`Error deleting cart ${cart.id}:`, error);
          });
        }
      });
      navigate('/order', { state: { newOrder } });
    })
    .catch(error => {
      console.error('Error creating order:', error);
    });
  }
  return (
    <>
        <h1>Cart</h1>
        <div className="Products">
        {printCarts}
        </div>
        <button onClick={makeOrder}>Make order</button>
        <button onClick={() => navigate('/')}>Back</button>     
    </>

  );
}
