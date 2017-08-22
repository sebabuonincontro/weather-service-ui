import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import {LocationComponent} from "./location/location.component";
import {BoardComponent} from "./board/board.component";

// Array con las rutas de este módulo. Ninguna funcional.
const routes: Routes = [
  { path: 'boards', component: BoardComponent},
  { path: 'boards/:boardName', component: LocationComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // configuración para el módulo raíz
  ],
  exports: [
    RouterModule // se importará desde el módulo padre
  ]
})
export class AppRoutingModule { }
