import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Datos } from './components/datos/datos';
import { BuscadorNombre } from './components/buscador-nombre/buscador-nombre';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'datos/:id', component: Datos },
    { path: 'buscadornombre/:nombre', component: BuscadorNombre },
];
