import { Component, OnInit, Input } from '@angular/core';
import { AuthenServiceService } from '../service/authenservice.service'


@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})

export class SignUpLoginComponent implements OnInit {
user={username:'',
password:''}
  constructor(private authenService : AuthenServiceService) { }

  ngOnInit() {}

  signup(){
  
    this.authenService.signup(this.user.username, this.user.password);
      
    }

  login(){
   
   this.authenService.login(this.user);

  }

}