import ProductoCard from './ProductoCard'
import { productos } from '../data/producto'

const ListaProductos = ({ agregarAlCarrito }) => (
  <div className="row">
    {productos.map((prod) => (
      <div key={prod.id} className="col-md-3">
        <ProductoCard producto={prod} agregarAlCarrito={agregarAlCarrito} />
      </div>
    ))}
  </div>
)

export default ListaProductos
