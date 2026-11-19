function CartItem({ item, index, onRemove }) {
    return (
        <li>
            {item.name} - ${item.price}

            <button onClick={() => onRemove(index)}>
                Удалить
            </button>
        </li>
    );
}

function TotalPrice({ items }) {
    const total = items.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    return (
        <h3>Общая стоимость: ${total.toFixed(2)}</h3>
    );
}

function Cart({ cartItems, onRemove, onClear }) {
    return (
        <div className="cart">
            <h2>Корзина покупок</h2>

            {cartItems.length === 0 ? (
                <p>Корзина пуста. Добавьте товары!</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <CartItem
                                key={index}
                                item={item}
                                index={index}
                                onRemove={onRemove}
                            />
                        ))}
                    </ul>

                    <TotalPrice items={cartItems} />

                    <button onClick={onClear}>
                        Очистить корзину
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
