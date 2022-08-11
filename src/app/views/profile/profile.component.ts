import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_CONFIG } from 'src/app/config/api.config';
import { ClienteDTO } from 'src/app/models/clientes.dto';
import { ClienteService } from 'src/app/services/domain/cliente.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{
  
  cliente: ClienteDTO | undefined;


  constructor(public router: Router, public storage: StorageService, public clienteService: ClienteService) {
  }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email)
      .subscribe((response: ClienteDTO | undefined) => {
        this.cliente = response;
        //this.getImageIfExists();
      }
      ,
        (      error: { status: number; }) =>{if(error.status == 403) {
        this.router.navigate(['/Home']);
      }
    });
    }
    else {
      this.router.navigate(['/Home']);
    }
  }

  /*getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente!.id)
    .subscribe(response => {
      this.cliente!.imgUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente!.id}.jpg`;
      console.log(this.cliente!.imgUrl);
    },
      (    error: any) => {});
  }*/

}
