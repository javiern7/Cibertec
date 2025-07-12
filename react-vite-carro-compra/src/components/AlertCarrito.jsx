import React from 'react'

const AlertCarrito = ({ carrito }) => (
  <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 9999 }}>
    <div className="alert alert-info">
      Tienes {carrito.reduce((acc, item) => acc + item.cantidad, 0)} productos en tu carrito.
    </div>
  </div>
)

export default AlertCarrito
