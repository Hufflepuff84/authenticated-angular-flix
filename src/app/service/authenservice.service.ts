import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Routes, Router, RouterModule } from '@angular/router';
import {User} from '../user';
@Injectable({
  providedIn: 'root'
})
export class AuthenServiceService {
  private _token: string;

  constructor(private apiService : ApiService, private routes : Router ) { }

  token;

  async signup(username:string, password:string){
   try{
    const user:User={userName:username, password:password};
      let response= await this.apiService.post("auth/signup", user);
      if (response){
        this.login(user);
      }
      return response;
    }
     catch(e){
        console.log("Login failed, display error to user");
        console.log(e);
      }
      
     

  }
 
  async login(user:User){
    //await this.apiService.post('auth/signup', user);
    
    
    
     try{
      const response= await this.apiService.post("auth/login", user);
      this.token= response.token;
      localStorage.setItem('token',this.token)
      this.routes.navigate(['/main'])
     }
       catch(e){
        console.log("Login failed, display error to user");
        console.log(e)
       }
        
        
      
    
    
  }

  getToken(){
    return this.token;
  }

}