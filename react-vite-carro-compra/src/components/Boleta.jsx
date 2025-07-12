import React from 'react'

const Boleta = ({ carrito }) => {
  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)

  return (
    <div className="card mt-4 p-3 shadow">
      <h4 className="text-center">Boleta de Compra</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Fruta</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map(item => (
            <tr key={item.id}>
              <td>{item.fruta}</td>
              <td>S/. {item.precio.toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>S/. {(item.precio * item.cantidad).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className="text-end">Total: S/. {total.toFixed(2)}</h5>
      <button className="btn btn-primary" onClick={() => window.print()}>
        Imprimir Boleta
      </button>
    </div>
  )
}

export default Boleta
