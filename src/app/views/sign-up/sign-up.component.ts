import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/domain/cliente.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  formGroup: FormGroup;

  constructor(
    public router: Router, 

    public formBuilder: FormBuilder,

    public clienteService: ClienteService) {

      this.formGroup = this.formBuilder.group({
        nome: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ["", [Validators.required, Validators.email]],
        tipo : ['1', [Validators.required]],
        senha : ["", [Validators.required]],
        telefone1 : ["", [Validators.required]],
  
      });
    }

  signupUser() {

    this.clienteService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {});
  }

  showInsertOk() {
    
            this.router.navigate(['/login'])

  }

}
