const Carrito = ({ carrito, eliminarItem, vaciarCarrito }) => (
  <div className="mt-4">
    <h4>Carrito de Compras</h4>
    <table className="table">
      <thead>
        <tr>
          <th>Fruta</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th></th>
        </tr>
      </thead>
      <tbody>
        {carrito.map((item) => (
          <tr key={item.id}>
            <td>{item.fruta}</td>
            <td>S/.{item.precio.toFixed(2)}</td>
            <td>{item.cantidad}</td>
            <td>S/.{(item.precio * item.cantidad).toFixed(2)}</td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={() => eliminarItem(item.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
  </div>
)

export default Carrito
