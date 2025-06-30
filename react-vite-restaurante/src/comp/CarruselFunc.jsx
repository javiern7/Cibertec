import { useEffect, useState } from "react";
import CardPlato from './CardPlato';

const CarruselFunc = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setIndex(prev => (prev + 1) % data.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isRunning, data.length]);

  const next = () => setIndex((index + 1) % data.length);
  const prev = () => setIndex((index - 1 + data.length) % data.length);
  const toggleAuto = () => setIsRunning(!isRunning);

  const platoActual = data[index];

  return (
    <div style={{ marginBottom: '2rem' }}>
      <CardPlato {...platoActual} />
      <button className="btn btn-primary me-2" onClick={prev}>Anterior</button>
      <button className="btn btn-primary me-2" onClick={next}>Siguiente</button>
      <button className="btn btn-secondary" onClick={toggleAuto}>{isRunning ? 'Parar' : 'Continuar'}</button>
    </div>
  );
};

export default CarruselFunc;
