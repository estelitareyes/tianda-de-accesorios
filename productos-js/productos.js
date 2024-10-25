$(document).ready(function() {
  let cart = {};

  $('.add-to-cart').click(function() {
      const productName = $(this).closest('.product').data('name');
      const productPrice = $(this).closest('.product').data('price');
      const quantity = parseInt($(this).siblings('.options').find('.quantity').val());

      // Si el producto ya está en el carrito, actualiza la cantidad
      if (cart[productName]) {
          cart[productName].quantity += quantity;
      } else {
          // Agrega el producto al carrito
          cart[productName] = {
              price: productPrice,
              quantity: quantity
          };
      }

      // Actualiza el contador en el carrito
      updateCartDisplay();
  });

  // Función para actualizar la visualización del carrito
  function updateCartDisplay() {
      $('#cart-items').empty();
      let totalCount = 0;

      $.each(cart, function(name, item) {
          totalCount += item.quantity;
          $('#cart-items').append(`
              <div class="cart-item">
                  <span>${name} - <br>
                  $${item.price} x ${item.quantity}
                  </span>
                  <button class="remove-btn">Quitar</button>
              </div>
          `);
      });

      $('#cart-count').text(totalCount);

      // Mostrar u ocultar el botón "Calcular Total"
      if (totalCount > 0) {
          $('#calculate-total').show();
      } else {
          $('#calculate-total').hide();
          $('#total-display').text(''); // Limpiar el total si el carrito está vacío
      }
  }

  // Event delegation para quitar productos del carrito
  $('#cart-items').on('click', '.remove-btn', function() {
      const productName = $(this).siblings('span').text().split(' - ')[0];

      // Eliminar el producto del carrito
      delete cart[productName];

      // Actualiza la visualización del carrito
      updateCartDisplay();
  });

  // Calcular total
  $('#calculate-total').click(function() {
      let total = 0;

      $.each(cart, function(name, item) {
          total += item.price * item.quantity;
      });

      $('#total-display').text(`Total: $${total.toFixed(2)}`);
  });

  // Inicialmente ocultar el botón
  $('#calculate-total').hide();
});
