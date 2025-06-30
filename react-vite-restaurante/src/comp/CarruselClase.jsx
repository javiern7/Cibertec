import { Component } from 'react';
import CardPlato from './CardPlato';

export class CarruselClase extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, isRunning: true };
    this.interval = null;
  }

  componentDidMount() { this.startAuto(); }
  componentWillUnmount() { clearInterval(this.interval); }

  startAuto = () => {
    this.interval = setInterval(() => { this.next(); }, 3000);
  };

  stopAuto = () => { clearInterval(this.interval); };

  toggleAuto = () => {
    this.setState(prev => ({ isRunning: !prev.isRunning }), () => {
      this.state.isRunning ? this.startAuto() : this.stopAuto();
    });
  };

  next = () => {
    this.setState(prev => ({ index: (prev.index + 1) % this.props.data.length }));
  };

  prev = () => {
    this.setState(prev => ({
      index: (prev.index - 1 + this.props.data.length) % this.props.data.length
    }));
  };

  render() {
    const { data } = this.props;
    const { index, isRunning } = this.state;
    const platoActual = data[index];

    return (
      <div>
        <CardPlato {...platoActual} />
        <button className="btn btn-primary me-2" onClick={this.prev}>Anterior</button>
        <button className="btn btn-primary me-2" onClick={this.next}>Siguiente</button>
        <button className="btn btn-secondary" onClick={this.toggleAuto}>{isRunning ? 'Parar' : 'Continuar'}</button>
      </div>
    );
  }
}

export default CarruselClase;
