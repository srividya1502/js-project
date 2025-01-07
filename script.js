let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
    
    document.querySelector('.slide-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); 


        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Function to add or update quantity of an item in the cart
        function addToCart(event) {
            const card = event.target.closest('.restaurant-card');
            const name = card.getAttribute('data-name');
            const price = card.getAttribute('data-price');
            const image = card.getAttribute('data-image');
    
            const item = { name, price, image, quantity: 1 };
    
            // Check if item already exists in the cart
            const existingItemIndex = cart.findIndex(cartItem => cartItem.name === name);
            if (existingItemIndex > -1) {
                // If item exists, update the quantity
                cart[existingItemIndex].quantity += 1;
            } else {
                // Add new item to the cart
                cart.push(item);
            }
    
            // Save updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${name} has been added to your cart!`);
        }
    
        // Add event listeners to all "Add to Cart" buttons
        const buttons = document.querySelectorAll('.add-to-cart');
        buttons.forEach(button => {
            button.addEventListener('click', addToCart);
        });
  