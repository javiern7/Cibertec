import { useEffect, useState } from 'react'
import './App.css'
import AlertCarrito from './components/AlertCarrito';
import ListaProductos from './components/ListaProductos';
import Carrito from './components/Carrito';
import Boleta from './components/Boleta';
import * as carritoService from './services/carritoService'
import * as productoService from './services/productoService'

function App() {
  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])

  const loadProductos = async () => {
    const res = await productoService.getProductos()
    setProductos(res.data)
  }

  const loadCarrito = async () => {
    const res = await carritoService.getCarrito()
    setCarrito(res.data)
  }

  const agregarAlCarrito = async (producto) => {
    const exist = carrito.find(item => item.productoId === producto.id)
    if (exist) {
      await carritoService.updateItem(exist.id, { cantidad: exist.cantidad + 1 })
    } else {
      await carritoService.addItem({
        productoId: producto.id,
        fruta: producto.fruta,
        precio: producto.precio,
        cantidad: 1
      })
    }
    loadCarrito()
  }

  const eliminarItem = async (id) => {
    await carritoService.deleteItem(id)
    loadCarrito()
  }

  const vaciarCarrito = async () => {
    await carritoService.vaciarCarrito()
    loadCarrito()
  }

  useEffect(() => {
    loadProductos()
    loadCarrito()
  }, [])

  return (
    <div className="container mt-4">
      <h1>Carrito Frutas</h1>
      <AlertCarrito carrito={carrito} />
      <ListaProductos productos={productos} agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} eliminarItem={eliminarItem} vaciarCarrito={vaciarCarrito} />
      <Boleta carrito={carrito} />
    </div>
  )
}



export default App
