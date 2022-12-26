import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './home/welcome-page/welcome-page.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

// Added Routing Functionality
const routes: Routes = [
  { path: '', component: WelcomePageComponent, data: { title: 'Welcome to Petals PG' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login to Petals PG' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Sign Up'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
