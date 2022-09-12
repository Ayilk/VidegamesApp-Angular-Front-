import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    
  },
  {
    path: 'videogames',
    loadChildren: () => import ('./videogames/videogames.module').then(m => m.VideogamesModule),
    //Si estoy llamando al canLoad , angular va ir a mi guard y revisar que tenga
    //implementada la interfaz del canLoad y va a implementarlo cuando alguien intente CARGAR ese modulo
    //canLoad: [AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'videogames'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
