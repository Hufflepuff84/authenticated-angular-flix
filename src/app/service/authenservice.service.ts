import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import {User} from '../user';
@Injectable({
  providedIn: 'root'
})
export class AuthenServiceService {
  private _token: string;

  constructor(private apiService : ApiService) { }

  token: string;

  async signup(username:string, password:string): Promise<any> {
   try{
    const user={userName:username, password:password};
      let response= await this.apiService.post("auth/signup", user);
      
      return response;
    }
     catch(e){
        console.log("Login failed, display error to user");
        console.log(e);
      }
  }
 
  async login(username:string, password:string):Promise<void>{
    //await this.apiService.post('auth/signup', user);
    const user={userName:username, password:password};
    try{
      const response= await this.apiService.post("auth/login", user);
      
      localStorage.setItem('token',this.token) // using a cookie to set this token. in order to get token we need to use this storage item.
      
     }
       catch(e){
        console.log("Login failed, display error to user");
        console.log(e)
       } 
  }

  getToken(){
    return localStorage.getItem('token');
  }
isAuth():boolean {
  return localStorage.getItem('token') !== null;

}

}