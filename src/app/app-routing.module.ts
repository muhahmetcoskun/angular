import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [];

@NgModule({
  imports: [
      RouterModule.forRoot([
          {
              path: '', component: LayoutComponent,
              children: [
                 
                  {   path: '', component: HomeComponent},
                
              ]
          },
          {
              path: '', component: LayoutComponent,
              children: [
                 
                  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
                
              ]
          },
      
          {path: '404', component: NotFoundComponent},
          {path: 'login', component: LoginComponent},
          {path: 'register', component: RegisterComponent},
          {path: '401', component: UnauthorizedComponent},
          {path: '**', component: NotFoundComponent},
        
          

          //{ path: 'auth', loadChildren: () => import('./puantaj/auth/auth.module').then(m => m.AuthModule) },
      ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
