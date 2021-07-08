import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Vacunas } from 'src/app/interfaces/Vacunas.interface';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.page.html',
  styleUrls: ['./vacunas.page.scss'],
})
export class VacunasPage implements OnInit {
  nid:string;
  vacunas:Vacunas[];
  miembro:string;
  private loading: HTMLIonLoadingElement;

  constructor(private activateroute:ActivatedRoute,private drupal:DrupalService,private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.activateroute.params.subscribe(resp=>{
      this.nid = resp.nid;
      this.drupal.getVacunas(this.nid).subscribe(resp=>{
        this.miembro = resp[0].miembro;
        this.vacunas = resp;
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

}
