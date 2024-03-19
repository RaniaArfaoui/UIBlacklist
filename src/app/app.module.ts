import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module'; // Make sure the path is correct
@NgModule({
  declarations: [
    LoginComponent,
    // ... other components
  ],
  imports: [
    BrowserModule,
     // Add the AppRoutingModule here
    // ... other modules
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],

})
export class AppModule { }
