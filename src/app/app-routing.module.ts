import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametersScreenComponent } from './parameters-screen/parameters-screen.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'parameters', component: ParametersScreenComponent },
  // ... your other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
