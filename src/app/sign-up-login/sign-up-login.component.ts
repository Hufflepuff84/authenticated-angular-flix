import { Component, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthenServiceService} from '../service/authenservice.service';
import {User} from '../user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent implements OnInit {

  constructor(private auth: AuthenServiceService,private Router: Router) {

   }
user : User ;
userName:string;
password:string;
invalidlogin= false;


  ngOnInit() {
    
  }
  

  async loginfunction (){
    await this.auth.login(this.userName,this.password);
    if ( !this.auth.isAuth()) {
      this.invalidlogin = true;
    }
    else {
      this.invalidlogin = false;
      this.Router.navigate(['/main'])
    }
    
  }
  async registerfunction(){
   await this.auth.signup( this.userName, this.password);
   await this.loginfunction()
   
  }


  

}
