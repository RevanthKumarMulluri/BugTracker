import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './components/layouts/login-register/login-register.component';
import { BugcreateComponent } from './components/bugcreate/bugcreate.component';

const routes: Routes = [
  {path: 'login',component:LoginRegisterComponent},
  {path: 'create',component:BugcreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
