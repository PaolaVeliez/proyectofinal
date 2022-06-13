import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

const router: Routes = [
  {path:'',component: HomeComponent},
  {path:'',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
