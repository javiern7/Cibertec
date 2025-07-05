import { Component } from "react"


class PrimoManualClass extends Component {
  //Constructor para que inicialice en 2
  constructor(props) {
    super(props)
    this.state = { actualPrimo: 2 }
  }

  //funcion para validar numero primo
  esPrimo(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  //funcion siguiente numero primo
  siguientePrimo = () => {
    let next = this.state.actualPrimo + 1
    while (!this.esPrimo(next)) {
      next++
    }
    this.setState({ actualPrimo: next })
  }

  //funcion anterior numero primo  
  anteriorPrimo = () => {
    let prev = this.state.actualPrimo - 1
    while (prev > 1 && !this.esPrimo(prev)) {
      prev--
    }
    this.setState({ actualPrimo: prev > 1 ? prev : 2 })
  }

  //mostrar la informacion en un card
  render() {
    return (
      <div className="container mt-4 d-flex justify-content-center">
        <div className="card shadow" style={{ width: '20rem' }}>
          <div className="card-header bg-dark text-white">
            Número Primo
          </div>
          <div className="card-body text-center">
            <h1 className="display-3">{this.state.actualPrimo}</h1>
            <div className="mt-3">
              <button className="btn btn-primary me-2" onClick={this.siguientePrimo}>Avanzar</button>
              <button className="btn btn-success" onClick={this.anteriorPrimo}>Retroceder</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PrimoManualClass;
