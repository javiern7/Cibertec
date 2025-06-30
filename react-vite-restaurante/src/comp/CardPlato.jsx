import './CardPlato.css';

const CardPlato = ({ nombre, imagen, precio }) => {
  return (
    <div className="card-plato">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} />
      <p>Precio: S/. {precio.toFixed(2)}</p>
    </div>
  );
};

export default CardPlato;
