import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password!: string;
    user: User = new User();
    errorMessage: string = "";
    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    ngOnInit(): void {
        if (this.authenticationService.currentUserValue?.username) {
          this.router.navigate(['']);
          return;
        }

        
      }
      login() {
        this.authenticationService.login(this.user).subscribe(data => {
          this.router.navigate(['']);
        }, err => {
          this.errorMessage = 'Kullanıcı Adı veya Şifre Hatası.';
          console.log(err);
         // this.messageService.add({ severity: 'error', summary: 'Hata Mesajı', detail: 'Kullanıcı Adı veya Şifre Hatalı', life: 3000 });
        })
      }
}
