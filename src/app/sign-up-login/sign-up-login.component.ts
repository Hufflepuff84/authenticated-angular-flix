import { Component, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthenServiceService} from '../service/authenservice.service';
import {User} from '../user'

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent implements OnInit {

  constructor(private auth: AuthenServiceService) {

   }
user : User ;
userName:string;
  ngOnInit() {
    this.user={
      userName: "",
      password:""
    };
  }

  loginfunction (){
    this.auth.login(this.user);
  }
  registerfunction(){
    this.auth.signup( this.user.userName, this.user.password);
  }


  

}
