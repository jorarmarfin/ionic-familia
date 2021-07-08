import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Medicamentos } from 'src/app/interfaces/Medicamentos.interface';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-botiquin',
  templateUrl: './botiquin.page.html',
  styleUrls: ['./botiquin.page.scss'],
})
export class BotiquinPage implements OnInit {

  medicamentos:Medicamentos[];
  private loading: HTMLIonLoadingElement;

  constructor(private drupal:DrupalService,private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.drupal.getMedicamentos().subscribe(resp=>{
      this.medicamentos = resp;
      this.loading.dismiss();
    });
  }
  buscar(event:any){
    this.presentLoading();
    this.drupal.getBuscarMedicamentos(event.detail.value).subscribe(resp=>{
      this.medicamentos = resp;
      this.loading.dismiss();
    });
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
    });
    await this.loading.present();

  }

}
