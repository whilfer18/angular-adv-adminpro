import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoudComponent } from '../nopagefoud/nopagefoud.component';





const routes: Routes = [
  //path:'/dashboard' PagesRoutingModule
  //path:'/auth' AuthRoutingModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
