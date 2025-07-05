import axios from 'axios';

const URL = 'http://localhost:5000/alumnos'

export const getAlumnos = () => axios.get(URL)
export const getAlumno = (id) => axios.get(`${URL}/${id}`)
export const addAlumno = (alumno) => axios.post(URL, alumno)
export const updateAlumno = (id, alumno) => axios.put(`${URL}/${id}`, alumno)

// "Eliminar" lógico → cambia estado a Retirado o Sancionado
export const cambiarEstado = (id, nuevoEstado) => axios.patch(`${URL}/${id}`, { estado: nuevoEstado })

// Restaurar → vuelve a En Proceso
export const restoreAlumno = (id) => axios.patch(`${URL}/${id}`, { estado: "En Proceso" })