// Product Image Switching
const mainImage = document.querySelector('.display-product img');
const thumbnails = document.querySelectorAll('.display-product-featured img');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        const newImg = thumbnail.getAttribute('src');
        mainImage.setAttribute('src', newImg);
    });
});

// Payment Method Selection
const paymentOptions = document.querySelectorAll('.payment-option img');

// Shows the selected payment mathod
const paymentNames = [
    "Apple Pay",
    "Google Pay",
    "Mastercard",
    "Shop Pay",
    "Visa Card"
];

// Assign selection logic to payment options
paymentOptions.forEach((img, index) => {
    img.addEventListener('click', () => {
        paymentOptions.forEach(option => option.classList.remove('selected'));
        img.classList.add('selected');
        img.setAttribute('data-method', paymentNames[index]);
    });
});


// Add to Cart Button Handling
const addToCartBtn = document.querySelector('.add-cart .btn');

addToCartBtn.addEventListener('click', () => {
    const selectedPayment = document.querySelector('.payment-option img.selected');

    if (!selectedPayment) {
        alert('Please select a payment method before adding to cart.');
        return;
    }

    const paymentMethod = selectedPayment.getAttribute('data-method');
    alert(`Item added to cart!\nPayment Method Selected: ${paymentMethod}`);
});
