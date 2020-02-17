import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Routes, Router, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenServiceService {
  private _token: string;

  constructor(private apiService : ApiService, private routes : Router ) { }

  token;

  async signup(username, password){
    const user={username, password};
      let response= await this.apiService.post("auth/signup", user);
      if (response){
        console.log(this.token);
        this.routes.navigate(['/main'])
      }
      else{
        console.log("Login failed, display error to user");
      }
      return response;
     

  }
 
  async login(user){
    await this.apiService.post('auth/signup', user);
    const response= await this.apiService.post("auth/login", user);
    this.token= response.token;
    localStorage.setItem('token',this.token)
    
    var success = this.login(user);
      if (success){
        console.log(this.token);
        this.routes.navigate(['/main'])
      }
      else{
        console.log("Login failed, display error to user");
      }
    
    
  }

  getToken(){
    return this.token;
  }

}