import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';

const router: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent}
  { path: 'editacercade/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
