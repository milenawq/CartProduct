function Product({ product, onAdd }) {
    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>Цена: ${product.price}</p>

            <button onClick={() => onAdd(product)}>
                Добавить в корзину
            </button>
        </div>
    );
}

export default Product;
