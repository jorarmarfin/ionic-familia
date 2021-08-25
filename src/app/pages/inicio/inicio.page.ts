import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
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

  constructor(private drupal:DrupalService,
    private router:Router,
    private loadingController: LoadingController,
    private storage: Storage
    ) { }

  async ngOnInit() {
    const storage = await this.storage.create();
    const miembros:Miembros[] = await storage.get('miembros');

    if (miembros) {
      this.miembros = miembros;
    } else {
      this.presentLoading();
      this.cargarData();
    }
  }
  cargarData(){
    this.drupal.getMiembros().subscribe(resp=>{
      this.miembros = resp;
      this.loading.dismiss();
      this.drupal.guardarStorage(resp);
    });
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
  doRefresh(event){
    this.drupal.eliminarStorage();
    this.drupal.getMiembros().subscribe(resp=>{
      this.miembros = resp;
      this.drupal.guardarStorage(resp);
    });
    event.target.complete();
    
  }

}
