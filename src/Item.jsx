import './css/Item.css'
function Item({ image, brand, category, name, price, priceSign }) {
    const length = name.length;

    return (
        <div id='item'>
            <div id="product-info">
                <div id="product-logo">
                    <img id="logo" src={image} onError={(e) => { e.target.onerror = null; e.target.src = "./images.png" }} alt='logo test' />
                </div>

                <div id="info">
                    <span id={length > 20 ? "product-name-limit" : "product-name"}>{name}</span>
                    <span className="item-hover">brand: {brand}</span>
                    <span className="item-hover">price: {price} {priceSign}</span>
                    <span className="item-hover">category: {category}</span>
                </div>

            </div>
        </div>
    )
}
export default Item;