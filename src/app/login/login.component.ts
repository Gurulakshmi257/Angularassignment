import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  darkForm: FormGroup;
  userName ='';
  password = '';

  constructor(public fb: FormBuilder) {
    this.darkForm = fb.group({
      darkFormEmailEx: ['', [Validators.required, Validators.email]],
      darkFormPasswordEx: ['', Validators.required],
    });
  }
  submit()
  {
    this.userName = this.darkForm.get('darkFormEmailEx')?.value;
    this.password = this.darkForm.get('darkFormPasswordEx')?.value;    
    
  }
}
