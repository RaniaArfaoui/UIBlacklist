import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  remember: boolean = false;

  constructor(private router: Router) { }

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/parameters']);
    } else {
      alert('Invalid credentials');
    }
  }
}
