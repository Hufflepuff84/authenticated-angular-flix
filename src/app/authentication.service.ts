import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private apiService : ApiService) { }

  token;

  async signup(user){

    return await this.apiService.post("auth/signup", user);
  }

  async login(user){
    const response =  await this.apiService.post("auth/login", user);
    this.token = response.token;
  }

  getAuthorizationToken(){
    return this.token;
  }

  isAuthorized(){
    if(this.token!= undefined){
      return true;
    }
    else{
      return false;
    }
  }

}