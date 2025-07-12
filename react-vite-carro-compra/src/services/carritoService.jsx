import axios from 'axios'

const URL = 'http://localhost:5000/carrito'

export const getCarrito = () => axios.get(URL)
export const addItem = (item) => axios.post(URL, item)
export const updateItem = (id, newData) => axios.patch(`${URL}/${id}`, newData)
export const deleteItem = (id) => axios.delete(`${URL}/${id}`)
export const vaciarCarrito = async () => {
    const { data } = await getCarrito()
    for (const item of data) {
        await deleteItem(item.id)
    }
}