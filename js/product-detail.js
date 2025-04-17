// Function to change the main product image
function changeMainImage(src) {
  const mainImage = document.getElementById('mainImage')
  mainImage.src = src

  // Update active thumbnail
  const thumbnails = document.querySelectorAll('.thumbnail')
  thumbnails.forEach((thumb) => {
    thumb.classList.remove('active')
    if (thumb.src === src) {
      thumb.classList.add('active')
    }
  })
}

// Function to update quantity
function updateQuantity(change) {
  const quantityInput = document.getElementById('quantity')
  let currentValue = parseInt(quantityInput.value) || 1
  currentValue = Math.max(1, currentValue + change)
  quantityInput.value = currentValue
}

// Function to handle add to cart
document.querySelector('.add-to-cart').addEventListener('click', function () {
  const quantity = document.getElementById('quantity').value
  // Add your cart functionality here
  alert(`Added ${quantity} item(s) to cart`)
})

// Function to handle buy now
document.querySelector('.buy-now').addEventListener('click', function () {
  const quantity = document.getElementById('quantity').value
  // Add your checkout functionality here
  alert(`Proceeding to checkout with ${quantity} item(s)`)
})

// Prevent negative numbers in quantity input
document.getElementById('quantity').addEventListener('change', function () {
  if (this.value < 1) {
    this.value = 1
  }
})
