import axios from 'axios'

const URL = 'http://localhost:5000/productos'

export const getProductos = () => axios.get(URL)