const ProductoCard = ({ producto, agregarAlCarrito }) => (
  <div className="card mb-4 shadow" style={{ width: '14rem' }}>
    <div className="card-header bg-primary text-white">
      Fruta: {producto.fruta}
    </div>
    <img
      src={producto.imagen}
      alt={producto.fruta}
      className="card-img-top"
      style={{ height: '120px', objectFit: 'cover' }}
    />
    <div className="card-footer bg-primary text-white text-center">
      Precio S/. {producto.precio.toFixed(2)}
    </div>
    <div className="card-body text-center">
      <button
        className="btn btn-success btn-sm"
        onClick={() => agregarAlCarrito(producto)}
      >
        Agregar al carrito
      </button>
    </div>
  </div>
)

export default ProductoCard
