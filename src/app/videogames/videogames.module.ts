import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { GameComponent } from './pages/game/game.component';
import { YearComponent } from './pages/year/year.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { OrderYearComponent } from './pages/order-year/order-year.component';
import { OrderConsoleComponent } from './pages/order-console/order-console.component';



@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent,
    BuscarComponent,
    GameComponent,
    YearComponent,
    DeveloperComponent,
    OrderYearComponent,
    OrderConsoleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VideogamesModule { }
