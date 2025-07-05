const AlumnosFiltrados = ({ alumnos, onRestore }) => (
  <div>
    <h4>Alumnos Retirados/Sancionados</h4>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Nombres</th><th>DNI</th><th>Celular</th><th>Estado</th><th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {alumnos.map(alumno => (
          <tr key={alumno.id}>
            <td>{alumno.nombres}</td>
            <td>{alumno.dni}</td>
            <td>{alumno.celular}</td>
            <td>{alumno.estado}</td>
            <td>
              <button className="btn btn-success btn-sm" onClick={() => onRestore(alumno.id)}>
                Restaurar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default AlumnosFiltrados
