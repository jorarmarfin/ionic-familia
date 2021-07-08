import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Miembros } from 'src/app/interfaces/Miembros.interface';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public miembros: Miembros[];
  private loading: HTMLIonLoadingElement;

  constructor(private drupal:DrupalService,private router:Router,private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.drupal.getMiembros().subscribe(resp=>{
      this.miembros=resp;
      this.loading.dismiss();
    })
  }
  onClick(uuid:string){
    this.router.navigate(['detalles',uuid]);
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
    });
    await this.loading.present();

  }

}
