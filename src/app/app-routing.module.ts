import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NetflixComponent } from './netflix/netflix.component';

const routes: Routes = [ 
   {path: 'login', component: LoginComponent },
  { path: 'netflix', component: NetflixComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
