import { Routes } from '@angular/router';
import { Inicio } from './comp/inicio/inicio';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: Inicio },
    {
        path: 'app-producto',
        loadComponent: () => import('./comp/producto/producto').then(m => m.Producto)
    },
    {
        path: 'app-juego-adivina',
        loadComponent: () => import('./comp/juego-adivina/juego-adivina').then(m => m.JuegoAdivinaComponent)
    },
    {
        path: 'app-portal-pelicula',
        loadComponent: () => import('./comp/portal-pelicula/portal-pelicula').then(m => m.PortalPelicula)
    }
];
