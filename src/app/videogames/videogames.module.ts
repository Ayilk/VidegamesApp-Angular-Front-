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
import { ListasComponent } from './pages/listas/listas.component';



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
    ListasComponent,
   
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
