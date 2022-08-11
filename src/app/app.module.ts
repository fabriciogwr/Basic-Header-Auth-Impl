import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SignInComponent } from './views/sign-in/sign-in.component';

import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { ProfileComponent } from './views/profile/profile.component';
import { ClienteService } from './services/domain/cliente.service';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';







@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [AuthService, StorageService, AuthInterceptorProvider, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
