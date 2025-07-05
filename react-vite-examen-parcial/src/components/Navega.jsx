import { NavLink, Route, Routes } from "react-router-dom";
import Inicio from "../Inicio";
import PaginaNoEncontrada from "../PaginaNoEncontrada";
import PrimoManualClass from "./PrimoManualClass";
import PrimoAutoClass from "./PrimoAutoClass";
import KanbanBoard from "./KanbanBoard";
import GestionAlumnos from "./GestionAlumnos";

const Navega = () => {

    return (
        <main className="container mb-3">

            <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">


                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="primo-manual-clase">Primo Manual</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="primo-automatico-clase">Primo Automatico</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="kanban-route">Tablero Kanban</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="alumnos-route">Gestión de Alumnos</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* mapeo de rutas */}
            <Routes>

                <Route path="primo-manual-clase" element={<PrimoManualClass />} />
                <Route path="primo-automatico-clase" element={<PrimoAutoClass />} />
                <Route path="kanban-route" element={<KanbanBoard />} />
                <Route path="alumnos-route" element={<GestionAlumnos />} />

                <Route path="/" element={<Inicio />} />
                <Route path="*" element={<PaginaNoEncontrada />} />
            </Routes>
        </main>
    )

}

export default Navega;