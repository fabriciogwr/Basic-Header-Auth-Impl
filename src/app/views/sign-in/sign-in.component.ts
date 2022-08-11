import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent{


  creds : CredenciaisDTO = {
    email:"", senha: ""
  };

  constructor(public router: Router, public auth: AuthService) {

  }

  
  ionViewDidEnter() {
    this.auth.refreshToken()
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.router.navigate(['/home']);
    },
    error => {})
  }

  login() {
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.router.navigate(['/home']);
    },
    error => {})
    
  }

  signup() {
    console.log("Pssou");
    this.router.navigate(['/signup']);
  }


}
