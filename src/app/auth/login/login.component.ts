import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password!: string;
    user: User = new User();
    errorMessage: string = "";
    constructor(private authenticationService: AuthenticationService, private router: Router,private fb:FormBuilder ){ }

    loginForm= this.fb.group({
      password:['',Validators.required,Validators.minLength(6)],
      username:['',Validators.required,Validators.minLength(2)]
    });

    ngOnInit(): void {
        if (this.authenticationService.currentUserValue?.username) {
          this.router.navigate(['']);
          return;
        }

        
      }

      get f(): { [key: string]: AbstractControl } {
        return this.loginForm.controls;
      }
    
     

      login() {
     
        
        //  const user: User = {
        //   username: this.loginForm.value.username.toString(),
        //   password: this.loginForm.value.password?.toString()
        // };
       debugger;
        this.authenticationService.login(this.user).subscribe(data => {
          this.router.navigate(['']);
        }, err => {
          this.errorMessage = 'Kullanıcı Adı veya Şifre Hatası.';
          console.log(err);
         // this.messageService.add({ severity: 'error', summary: 'Hata Mesajı', detail: 'Kullanıcı Adı veya Şifre Hatalı', life: 3000 });
        })
      }
}
