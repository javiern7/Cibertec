import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Pelicula } from '../../modelo/Pelicula';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PeliculaService } from '../../servicio/pelicula-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portal-pelicula',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './portal-pelicula.html',
  styleUrl: './portal-pelicula.css'
})
export class PortalPelicula {

  private fb = inject(FormBuilder);

  peliculas: Pelicula[] = [];

  form: FormGroup;

  constructor(private peliculaService: PeliculaService, private change: ChangeDetectorRef) {
    this.form = this.fb.group({
      id: [],
      nombre: ['', Validators.required],
      estreno: [null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      genero: ['', Validators.required],
      duracion: [0, [Validators.required, Validators.min(1)]],
      calificacion: [null, [Validators.required, Validators.min(1), Validators.max(10)]]
    });

    this.listar();
  }

  guardar() {
    if (!this.form.valid) return;

    const pelicula = this.form.value;

    this.peliculaService.registrar(pelicula).subscribe(() => {
      this.limpiar();
      this.listar();
    });
  }

  listar() {
    this.peliculaService.listar().subscribe(data => {
      this.peliculas = data;
      this.change.detectChanges();
    });
  }

  eliminar(id: number) {
    this.peliculaService.eliminar(id).subscribe(() => {
      this.listar();
    });
  }

  limpiar() {
    this.form.reset();
  }
}
