document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNavigation = document.querySelector('#primary-navigation');

    if (mobileNavToggle && primaryNavigation) {
        mobileNavToggle.addEventListener('click', () => {
            const isVisible = primaryNavigation.getAttribute('data-visible') === 'true';
            primaryNavigation.setAttribute('data-visible', !isVisible);
            mobileNavToggle.setAttribute('aria-expanded', !isVisible);
        });
    }

 
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Filter products
            productItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    item.style.display = 'block'; // Or 'grid' if using grid layout
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});



// Product Modal (products.html)
    const productGrid = document.querySelector('.product-grid');
    const modal = document.getElementById('productModal');
    const closeButton = modal ? modal.querySelector('.close-button') : null;
    const modalProductName = modal ? modal.querySelector('#modal-product-name') : null;
    const modalProductImage = modal ? modal.querySelector('#modal-product-image') : null;
    const modalProductDescription = modal ? modal.querySelector('#modal-product-description') : null;
    const modalProductPrice = modal ? modal.querySelector('#modal-product-price') : null;
    const addToCartButton = modal ? modal.querySelector('.add-to-cart') : null;
    const quantityInput = modal ? modal.querySelector('#quantity') : null;
    const addToCartMessage = modal ? modal.querySelector('#add-to-cart-message') : null;

    if (productGrid && modal && closeButton && modalProductName && modalProductImage && modalProductDescription && modalProductPrice && addToCartButton && quantityInput && addToCartMessage) {
        productGrid.addEventListener('click', (event) => {
            const viewDetailsButton = event.target.closest('.view-details-button');
            if (viewDetailsButton) {
                const productItem = viewDetailsButton.closest('.product-item');
                const productId = productItem ? productItem.getAttribute('data-product-id') : null;

                // In a real application, you would fetch product details based on the ID
                // For this example, we'll hardcode some details based on the data-product-id
                if (productId === '1') {
                    modalProductName.textContent = 'Elegant Sofa';
                    modalProductImage.src = '../images/Super.jpg';
                    modalProductImage.alt = 'Elegant Sofa';
                    modalProductDescription.textContent = 'Comfortable and stylish sofa for your living room.';
                    modalProductPrice.textContent = 'Ksh 45,000';
                    modal.style.display = 'block';
                }  else if (productId === '2') {
                    modalProductName.textContent = 'Wooden Dining Table';
                    modalProductImage.src = '../images/dining.jpg';
                    modalProductImage.alt = 'Wooden Dining Table';
                    modalProductDescription.textContent = 'Handcrafted dining table for family gatherings.';
                    modalProductPrice.textContent = 'Ksh 60,000';
                    modal.style.display = 'block';
                } else if (productId === '3') {
                    modalProductName.textContent = 'Modern Bed Frame';
                    modalProductImage.src = '../images/bed.jpg';
                    modalProductImage.alt = 'Modern Bed Frame';
                    modalProductDescription.textContent = 'Sleek and sturdy bed frame for a restful sleep.';
                    modalProductPrice.textContent = 'Ksh 35,000';
                    modal.style.display = 'block';
                }  else if (productId === '4') {
                    modalProductName.textContent = 'Comfortable Armchair';
                    modalProductImage.src = '../images/Arm.jpg';
                    modalProductImage.alt = 'Comfortable Armchair';
                    modalProductDescription.textContent = 'Perfect armchair for reading and relaxation.';
                    modalProductPrice.textContent = 'Ksh 22,000';
                    modal.style.display = 'block';
                } else if (productId === '5') {
                    modalProductName.textContent = 'Study Desk';
                    modalProductImage.src = '../images/desk.jpg';
                    modalProductImage.alt = 'Study Desk';
                    modalProductDescription.textContent = 'Functional and stylish desk for your home office.';
                    modalProductPrice.textContent = 'Ksh 28,000';
                    modal.style.display = 'block';
                } else if (productId === '6') {
                    modalProductName.textContent = 'Book Shelf';
                    modalProductImage.src = '../images/cup.jpg';
                    modalProductImage.alt = 'Book Shelf';
                    modalProductDescription.textContent = 'Organize your books with this elegant bookshelf.';
                    modalProductPrice.textContent = 'Ksh 22,000';
                    modal.style.display = 'block';
                }
            }
        });

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

         // Add to Cart Functionality
        addToCartButton.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value, 10);
            if (quantity > 0) {
                // Perform "add to cart" logic here (e.g., store in localStorage, send to server)
                // For now, just show a confirmation message
                addToCartMessage.textContent = `Added ${quantity} ${modalProductName.textContent}(s) to cart.`;
                addToCartMessage.classList.add('success-message'); // Show the message

                // Clear the message after a few seconds
                setTimeout(() => {
                    addToCartMessage.textContent = '';
                    addToCartMessage.classList.remove('success-message');
                }, 3000);
            } else {
                addToCartMessage.textContent = 'Please enter a valid quantity.';
                addToCartMessage.classList.add('error-message');
                setTimeout(() => {
                    addToCartMessage.textContent = '';
                    addToCartMessage.classList.remove('error-message');
                }, 3000);
            }
        });
    }
});