import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Miembros } from 'src/app/interfaces/Miembros.interface';
import { Node } from 'src/app/interfaces/Node.interface';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-admin-vacunas',
  templateUrl: './admin-vacunas.page.html',
  styleUrls: ['./admin-vacunas.page.scss'],
})
export class AdminVacunasPage implements OnInit {
  formVacuna: FormGroup;
  private loading: HTMLIonLoadingElement;
  public miembros:Miembros[];

  constructor(
    private fb:FormBuilder,
    private  drupal:DrupalService,
    private loadingController: LoadingController, 
    private alertController: AlertController,
    private router:Router) {
      this.crearFormulario();
     }

  async ngOnInit() {
    this.miembros = await this.drupal.obtenerStorage('miembros');
  }
  crearFormulario(){
    this.formVacuna = this.fb.group({
      nombre: ['',Validators.required],
      miembro: ['',Validators.required],
      descripcion: ['']
    });
  }
  enviar(){
    this.presentLoading();
    let vacuna = this.formVacuna.value;
    let node:Node = {
        "type": [{ "target_id": "vacunas" }],
        "title": [{ "value": vacuna.nombre }],
        "body": [{ "value": vacuna.descripcion}],
        "field_miembro":[
          {
              "target_id": vacuna.miembro,
              "target_type": "node",
              "target_uuid": this.miembros[vacuna.miembro].uuid,
              "url": "https://familia.sahost.org/node/1"
          }
      ]
    };
    this.drupal.setNode(node).subscribe(resp=>{
      this.formVacuna.reset();
      this.loading.dismiss();
      this.router.navigate(['vacunas',this.miembros[vacuna.miembro-1].nid]);
    },error=>{
      console.log('error');
      this.loading.dismiss();
      this.presentAlert('Error','No se guardo la información');
    }
    );

  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
    });
    await this.loading.present();

  }
  async presentAlert(titulo:string,mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: '',
      message: mensaje,
      buttons: ['Cerrar']
    });

    await alert.present();
  }

}
