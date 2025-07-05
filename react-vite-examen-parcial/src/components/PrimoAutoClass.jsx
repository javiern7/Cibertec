import { Component } from "react"

class PrimoAutoClass extends Component {
  constructor(props) {
    super(props)
    this.state = { actualPrimo: 2, isRunning: false }
    this.interval = null
  }

  esPrimo(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  siguientePrimo = () => {
    let next = this.state.actualPrimo + 1
    while (!this.esPrimo(next)) {
      next++
    }
    this.setState({ actualPrimo: next })
  }

  anteriorPrimo = () => {
    let prev = this.state.actualPrimo - 1
    while (prev > 1 && !this.esPrimo(prev)) {
      prev--
    }
    this.setState({ actualPrimo: prev > 1 ? prev : 2 })
  }

  startAutoAvance = () => {
    if (!this.state.isRunning) {
      this.interval = setInterval(this.siguientePrimo, 2000)
      this.setState({ isRunning: true })
    }
  }

  stopAutoAvance = () => {
    clearInterval(this.interval)
    this.setState({ isRunning: false })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="container mt-4 d-flex justify-content-center">
        <div className="card shadow" style={{ width: '30rem' }}>
          <div className="card-header bg-dark text-white">
            Número Primo Automático
          </div>
          <div className="card-body text-center">
            <h1 className="display-3">{this.state.actualPrimo}</h1>
            <div className="mt-4 d-flex flex-wrap justify-content-center">
              <button className="btn btn-primary me-2" onClick={this.siguientePrimo}>Avanzar</button>
              <button className="btn btn-success me-2" onClick={this.anteriorPrimo}>Retroceder</button>
              <button className="btn btn-info me-2" disabled={this.state.isRunning} onClick={this.startAutoAvance}>Iniciar</button>
              <button className="btn btn-warning me-2" disabled={!this.state.isRunning} onClick={this.stopAutoAvance}>Pausar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PrimoAutoClass