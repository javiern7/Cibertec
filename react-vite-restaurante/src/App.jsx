import CarruselClase from './comp/CarruselClase';
import CarruselFunc from './comp/CarruselFunc';
import { platos } from './data/platos';

function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 text-primary">🍽️ Restaurante: <span className="text-danger">Carruseles de Platos</span></h1>
      <div className="row justify-content-center mb-5">
        <div className="col-md-6 text-center text-success fw-bold text-shadow">
          <h3>🍽️ Carrusel Clase</h3>
          <CarruselClase data={platos} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center text-info fw-bold text-shadow">
          <h3>🍽️ Carrusel Funcional</h3>
          <CarruselFunc data={platos} />
        </div>
      </div>
    </div>
  );
}


export default App;