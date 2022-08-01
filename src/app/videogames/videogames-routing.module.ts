import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { GameComponent } from './pages/game/game.component';
import { OrderConsoleComponent } from './pages/order-console/order-console.component';
import { OrderYearComponent } from './pages/order-year/order-year.component';
import { YearComponent } from './pages/year/year.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {
    path: 'home',
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
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'developer',
        component: DeveloperComponent
      },
      {
        path: 'game',
        component: GameComponent
      },
      {
        path: 'order-console',
        component: OrderConsoleComponent
      },
      {
        path: 'order-year',
        component: OrderYearComponent
      },
      {
        path: 'year',
        component: YearComponent
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
