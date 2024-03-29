import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './home/welcome-page/welcome-page.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { UserHomeComponent } from './dashboard/user-home/user-home.component';


// Added Routing Functionality
const routes: Routes = [
  { path: '', component: WelcomePageComponent, data: { title: 'Welcome to Petals PG' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login to Petals PG' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Sign Up to Petals PG'} },
  { path: 'user', component: UserHomeComponent, data: { title: 'Home'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
