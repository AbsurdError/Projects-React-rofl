import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Order({ activeUser }) {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3005/order')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error fetching orders');
                }
                return response.json();
            })
            .then(data => {
                let userOrders = data.filter(order => order.user === activeUser);
                setOrders(userOrders);
            })
            .catch(error => console.error('Error fetching orders:', error));
    }, [activeUser]);

    return (
    <div className="Products__order">
        <h1>Orders</h1>
        {orders.length > 0 ? (
        <div>
            {orders.map(order => (
            <div key={order.id}>
                <h4>Order ID: {order.id}</h4>
                <p>Products:
                {order.products.map(product => (
                    `${product.name} - ${product.price}`
                )).join(", ")}
                </p>
                <p>Total Price: {order.total_price}</p>
            </div>
            ))}
        </div>
        ) : (
        <p>No orders found for user {activeUser}.</p>
        )}
        <button onClick={() => navigate('/')}>Back</button>
    </div>
    );
}