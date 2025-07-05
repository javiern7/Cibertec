import { useState, useEffect } from 'react'

const AlumnoForm = ({ onSave, alumnoEdit, setAlumnoEdit }) => {
    const [form, setForm] = useState({
        nombres: '',
        dni: '',
        celular: '',
        estado: 'En Proceso' // valor por defecto
    })

    useEffect(() => {
        if (alumnoEdit) setForm(alumnoEdit)
    }, [alumnoEdit])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(form)
        setForm({ nombres: '', dni: '', celular: '', estado: 'En Proceso' })
        setAlumnoEdit(null)
    }

    const handleCancel = () => {
        // Limpia y vuelve al modo registrar
        setForm({ nombres: '', dni: '', celular: '', estado: 'En Proceso' })
        setAlumnoEdit(null)
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h4>{alumnoEdit ? 'Editar Alumno' : 'Registrar Alumno'}</h4>

            <div className="mb-2">
                <input name="nombres" className="form-control" placeholder="Nombres" value={form.nombres} onChange={handleChange} required />
            </div>

            <div className="mb-2">
                <input name="dni" className="form-control" placeholder="DNI" value={form.dni} onChange={handleChange} required />
            </div>

            <div className="mb-2">
                <input name="celular" className="form-control" placeholder="Celular" value={form.celular} onChange={handleChange} required />
            </div>

            <div className="mb-2">
                <select name="estado" className="form-select" value={form.estado} onChange={handleChange} required>
                    <option value="En Proceso">En Proceso</option>
                    <option value="Aprobado">Aprobado</option>
                    <option value="Desaprobado">Desaprobado</option>
                    <option value="Retirado">Retirado</option>
                    <option value="Sancionado">Sancionado</option>
                </select>
            </div>

            <button className="btn btn-success btn-sm me-2">Guardar</button>
            {alumnoEdit && (
                <button type="button" className="btn btn-danger btn-sm" onClick={handleCancel}>
                    Cancelar
                </button>
            )}
        </form>
    )
}

export default AlumnoForm;
