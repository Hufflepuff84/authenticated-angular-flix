import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent implements OnInit {

  username: string;
  password: string;
  invalidLogin = false;
  constructor(
    private authService: AuthenticationService,
    private routerService: Router) { }

  ngOnInit() {
  }

  async signup() {
    await this.authService.signUp(this.username, this.password);
    await this.login();
  }

  async login() {
    await this.authService.login(this.username, this.password);

    if (!this.authService.isAuthed()) {
      this.invalidLogin = true;
    } else {
      this.invalidLogin = false;
      this.routerService.navigate(['/main']);
    }
  }

}