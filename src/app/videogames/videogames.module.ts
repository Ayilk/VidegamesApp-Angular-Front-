import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { VideogamesRoutingModule } from './videogames-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { GameComponent } from './pages/game/game.component';

import { DeveloperComponent } from './pages/developer/developer.component';

import { ListadoComponent } from './pages/listado/listado.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { ListadoTotalComponent } from './components/listado-total/listado-total.component';
import { OrderYearComponent } from './components/order-year/order-year.component';
import { OrderConsoleComponent } from './components/order-console/order-console.component';
import { OrderDeveloperComponent } from './components/order-developer/order-developer.component';
import { OrderAlfabetoComponent } from './components/order-alfabeto/order-alfabeto.component';



@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent,
    BuscarComponent,
    GameComponent,
    
    DeveloperComponent,
    
    ListadoComponent,
    TarjetasComponent,
    EditarComponent,
    ConfirmarComponent,
    ListadoTotalComponent,
    OrderYearComponent,
    OrderConsoleComponent,
    OrderDeveloperComponent,
    OrderAlfabetoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,   
    VideogamesRoutingModule
  ],
  exports: [
   
  ]
})
export class VideogamesModule { }
