import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {
        path: 'app-producto',
        loadComponent: () => import('./comp/producto/producto').then(m => m.Producto)
    }
];
