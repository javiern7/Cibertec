import { useEffect, useState } from 'react'
import * as alumnoService from "../service/alumnoService";
import AlumnoForm from './AlumnoForm'
import AlumnoList from './AlumnoList'
import AlumnosFiltrados from './AlumnosFiltrados'

const GestionAlumnos = () => {
  const [alumnos, setAlumnos] = useState([])
  const [alumnoEdit, setAlumnoEdit] = useState(null)

  const loadData = async () => {
    const res = await alumnoService.getAlumnos()
    setAlumnos(res.data)
  }

  useEffect(() => { loadData() }, [])

  const onSave = async (alumno) => {
    if (alumno.id) {
      await alumnoService.updateAlumno(alumno.id, alumno)
    } else {
      await alumnoService.addAlumno(alumno)
    }
    loadData()
  }

  const onEdit = (alumno) => setAlumnoEdit(alumno)

  const onCambiarEstado = async (id) => {
    // Por ejemplo, marcamos como Retirado
    await alumnoService.cambiarEstado(id, "Retirado")
    loadData()
  }

  const onRestore = async (id) => {
    await alumnoService.restoreAlumno(id)
    loadData()
  }

  const alumnosActivos = alumnos.filter(a => !["Retirado", "Sancionado"].includes(a.estado))
  const alumnosInactivos = alumnos.filter(a => ["Retirado", "Sancionado"].includes(a.estado))

  return (
    <div className="container mt-4">
      <AlumnoForm onSave={onSave} alumnoEdit={alumnoEdit} setAlumnoEdit={setAlumnoEdit} />
      <AlumnoList alumnos={alumnosActivos} onEdit={onEdit} onCambiarEstado={onCambiarEstado} />
      <AlumnosFiltrados alumnos={alumnosInactivos} onRestore={onRestore} />
    </div>
  )
}

export default GestionAlumnos;
