import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { GameComponent } from './pages/game/game.component';

import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListasComponent } from './pages/listas/listas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },      
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path:'editar/:id',
        component: EditarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'developer',
        component: DeveloperComponent
      },
      {
        path: 'listas',
        component: ListasComponent
      },
      {
        path: ':id',
        component: GameComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
]

@NgModule({
   imports: [
   RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class VideogamesRoutingModule { }
