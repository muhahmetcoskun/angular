import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router,private fb:FormBuilder ){ }

  loginForm= this.fb.group({
    password:['',Validators.required,Validators.minLength(6)],
    username:['',Validators.required,Validators.minLength(2)],
    firstname:['',Validators.required,Validators.minLength(2)],
    lastname:['',Validators.required,Validators.minLength(2)],
    email:['',Validators.required,Validators.email],
    phonenumber:['',Validators.required,Validators.minLength(2)],
    role:['',Validators.required],
  });
}
