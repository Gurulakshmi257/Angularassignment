import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideButton : boolean = false;
  constructor(private router:Router){}
  
  navigateLogin()
  {
    this.hideButton = true;
    this.router.navigateByUrl("/login");
  }
  navigateNetflix()
  {
    this.hideButton = true;
    this.router.navigateByUrl("/netflix");
  }
}