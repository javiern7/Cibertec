import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../modelo/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

    private api = "http://localhost:5000/peliculas";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pelicula[]>(this.api);
  }

  registrar(peli: Pelicula) {
    return this.http.post<Pelicula>(this.api, peli);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
  
}
