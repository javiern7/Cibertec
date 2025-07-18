import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-juego-adivina',
  imports: [CommonModule, FormsModule],
  templateUrl: './juego-adivina.html',
  styleUrl: './juego-adivina.css'
})
export class JuegoAdivinaComponent {
  numerosAleatorios: number[] = [];
  intentos: number[] = [0, 0];
  puntajes: number[] = [0, 0];
  total: number = 0;
  mensaje: string[] = [];
  intentosUsados: number[] = [0, 0];

  constructor() {
    this.generarNumeros();
  }

  generarNumeros() {
    this.numerosAleatorios = [
      Math.floor(Math.random() * 5) + 1,
      Math.floor(Math.random() * 5) + 1
    ];
    this.intentosUsados = [0, 0];
    this.puntajes = [0, 0];
    this.mensaje = ['', ''];
    this.total = 0;
    this.intentos = [0, 0];
  }

  verificarIntento(index: number) {
    this.intentosUsados[index]++;
    if (this.intentosUsados[index] > 2) {
      this.mensaje[index] = '¡Ya usaste tus 2 intentos!';
      return;
    }

    if (this.intentos[index] === this.numerosAleatorios[index]) {
      if (this.intentosUsados[index] === 1) {
        this.puntajes[index] = 100;
      } else {
        this.puntajes[index] = 50;
      }
      this.mensaje[index] = `¡Correcto! Puntaje: ${this.puntajes[index]}`;
    } else {
      this.mensaje[index] = `Incorrecto. Intento ${this.intentosUsados[index]} de 2`;
    }

    this.total = this.puntajes[0] + this.puntajes[1];
  }

}
