import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Historial } from 'src/app/interfaces/Historial.interface';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  nid:string;
  historial:Historial[]=[];
  miembro:string='';
  private loading: HTMLIonLoadingElement;

  constructor(private activateroute:ActivatedRoute,
    private drupal:DrupalService,
    private router:Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.activateroute.params.subscribe(resp=>{
      this.nid = resp.nid;
      this.drupal.getHistorial(this.nid).subscribe(resp=>{
        this.miembro = resp[0].miembro;
        this.historial = resp;
        this.loading.dismiss();
      });
    })
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
    });
    await this.loading.present();

  }
  addHistoria(){
    this.router.navigate(['admin-historial']);
  }

}
