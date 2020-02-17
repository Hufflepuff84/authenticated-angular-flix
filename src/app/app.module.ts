import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HeroComponent } from './hero/hero.component';
import { TitleListComponent } from './title-list/title-list.component';
import { HeroButtonComponent } from './hero-button/hero-button.component';
import { ItemComponent } from './item/item.component';
import { ListToggleComponent } from './list-toggle/list-toggle.component';
import { MainComponent } from './main/main.component';
import {MovieService} from './movie.service';
import {MovieApiService} from './movie-api.service';
import {ApiService} from './api.service';
import { SignUpLoginComponent } from './sign-up-login-component/sign-up-login-component.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenInterceptor } from './authen-intercaptor.service';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {path: '', component: SignUpLoginComponent},
  {path: 'main', component: MainComponent}
];
const appRoutes = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchBoxComponent,
    HeroComponent,
    TitleListComponent,
    HeroButtonComponent,
    ItemComponent,
    ListToggleComponent,
    MainComponent,
    SignUpLoginComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
    
  ],
  exports:[
    RouterModule
  ],
  providers: [MovieService,MovieApiService,ApiService, {provide: HTTP_INTERCEPTORS, useClass: AuthenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }