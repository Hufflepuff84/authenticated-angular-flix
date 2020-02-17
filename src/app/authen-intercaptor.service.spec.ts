import { Component, OnInit, Injectable } from '@angular/core';
import { AuthenServiceService } from './service/authenservice.service'
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { $ } from 'protractor';


@Injectable()
export class AuthenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let token = this.authenService.getToken();
    if (!token){
      token='';
    }

    const authReq = req.clone({
      headers: req.headers.set('Authorization','bearer'+ token)
    });

    
    return next.handle(authReq);
  }
  

  constructor(private authenService : AuthenServiceService) { }




}