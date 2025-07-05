const AlumnoList = ({ alumnos, onEdit, onCambiarEstado }) => (
  <div className="row">
    {alumnos.map(alumno => (
      <div key={alumno.id} className="col-md-4 mb-3">
        <div className="card shadow">
          <div className="card-header bg-dark text-white">
            {alumno.nombres}
          </div>
          <div className="card-body text-center">
            <h3>{alumno.dni}</h3>
            <p>Celular: {alumno.celular}</p>
            <p><strong>Estado:</strong> {alumno.estado}</p>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(alumno)}>Editar</button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onCambiarEstado(alumno.id)}
              >
                Cambiar Estado
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default AlumnoList;
