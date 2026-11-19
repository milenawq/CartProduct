import { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

function App() {
    const products = [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 39.99 },
        { id: 3, name: 'Product 3', price: 49.99 }
    ];

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    const removeFromCart = (index) => {
        setCartItems(prevItems =>
            prevItems.filter((item, i) => i !== index)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div className="container">
            <h1>Продукты</h1>

            <div className="products">
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        onAdd={addToCart}
                    />
                ))}
            </div>

            <Cart
                cartItems={cartItems}
                onRemove={removeFromCart}
                onClear={clearCart}
            />
        </div>
    );
}

export default App;
