import React from 'react'
import { proyectos } from '../data/data'

const KanbanBoard = () => {
  // Clasificar tareas en tres listas
  const tareasNoIniciadas = []
  const tareasIniciadas = []
  const tareasFinalizadas = []

  proyectos.forEach(proyecto => {
    proyecto.tareas.forEach(tarea => {
      const infoTarea = {
        idProyecto: proyecto.id,
        nombreProyecto: proyecto.nombre,
        dificultadProyecto: proyecto.dificultad,
        nombreTarea: tarea.nombre,
        dificultadTarea: tarea.dificultad,
        avance: tarea.avance
      }

      if (tarea.avance === 0) {
        tareasNoIniciadas.push(infoTarea)
      } else if (tarea.avance === 100) {
        tareasFinalizadas.push(infoTarea)
      } else {
        tareasIniciadas.push(infoTarea)
      }
    })
  })

  return (
    <div className="container">
      <h2 className="text-center mb-4">Tablero Kanban</h2>
      <div className="row">
        <div className="col-md-4">
          <h4 className="text-center text-danger">Tareas a iniciar</h4>
          {tareasNoIniciadas.map((tarea, index) => (
            <div key={index} className="alert alert-danger">
              <p><strong>Id Proy:{tarea.idProyecto}</strong> Proyecto: {tarea.nombreProyecto}</p>
              <p>Tarea: {tarea.nombreTarea}</p>
              <p>Dificultad tarea: {tarea.dificultadTarea} avance: {tarea.avance}%</p>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <h4 className="text-center text-primary">Tareas iniciadas</h4>
          {tareasIniciadas.map((tarea, index) => (
            <div key={index} className="alert alert-primary">
              <p><strong>Id Proy:{tarea.idProyecto}</strong> Proyecto: {tarea.nombreProyecto}</p>
              <p>Tarea: {tarea.nombreTarea}</p>
              <p>Dificultad tarea: {tarea.dificultadTarea} avance: {tarea.avance}%</p>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <h4 className="text-center text-success">Tareas finalizadas</h4>
          {tareasFinalizadas.map((tarea, index) => (
            <div key={index} className="alert alert-success">
              <p><strong>Id Proy:{tarea.idProyecto}</strong> Proyecto: {tarea.nombreProyecto}</p>
              <p>Tarea: {tarea.nombreTarea}</p>
              <p>Dificultad tarea: {tarea.dificultadTarea} avance: {tarea.avance}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KanbanBoard;
