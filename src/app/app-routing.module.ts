import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './components/layouts/login-register/login-register.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  {path: 'login',component:LoginRegisterComponent},
  {path: 'projects',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
