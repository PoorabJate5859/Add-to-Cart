document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { title: 'Product 1', price: 20, img: './img/p1.jpg' },
        { title: 'Product 2', price: 35, img: './img/p3.jpeg' },
        { title: 'Product 3', price: 50, img: './img/p5.jpg' }
    ];

    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    let cartItemCount = 0;
    let totalPrice = 0;

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const productImage = document.createElement('img');
        productImage.src = product.img;
        productImage.alt = product.title;
        productImage.className = 'product-image';
        productCard.appendChild(productImage);

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.title;
        productCard.appendChild(productTitle);

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;
        productCard.appendChild(productPrice);

        const addToCartBtn = document.createElement('button');
        addToCartBtn.className = 'add-to-cart-btn';
        addToCartBtn.textContent = 'Add to Cart';
        productCard.appendChild(addToCartBtn);

        container.appendChild(productCard);

        addToCartBtn.addEventListener('click', function() {
            cartItemCount++;
            totalPrice += product.price;
            cartCounter.textContent = `Cart: ${cartItemCount} items`;
        });
    });

    const cartCounter = document.createElement('div');
    cartCounter.className = 'cart-counter';
    cartCounter.textContent = 'Cart: 0 items';
    document.body.appendChild(cartCounter);

    const checkoutBtn = document.createElement('button');
    checkoutBtn.className = 'checkout-btn';
    checkoutBtn.textContent = 'Checkout';
    document.body.appendChild(checkoutBtn);

    checkoutBtn.addEventListener('click', function() {
        if (cartItemCount > 0) {
            alert(`You have ${cartItemCount} items in your cart.\nTotal Price: $${totalPrice}. Proceeding to checkout...`);
        } else {
            alert('Your cart is empty.');
        }
    });
});
