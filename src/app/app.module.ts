import { BrowserModule } from '@angular/platform-Browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NetflixComponent } from './netflix/netflix.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LoginComponent,
    NetflixComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }