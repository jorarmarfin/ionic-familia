import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Miembros } from 'src/app/interfaces/Miembros.interface';
import { Node } from 'src/app/interfaces/Node.interface';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-admin-historial',
  templateUrl: './admin-historial.page.html',
  styleUrls: ['./admin-historial.page.scss'],
})
export class AdminHistorialPage implements OnInit {
  public formHistoria: FormGroup;
  private loading: HTMLIonLoadingElement;
  public miembros:Miembros[];

  constructor(
    private fb:FormBuilder,
    private  drupal:DrupalService,
    private loadingController: LoadingController, 
    private alertController: AlertController) { 
      this.crearFormulario();
    }

  async ngOnInit() {
    this.miembros = await this.drupal.obtenerStorage('miembros');
  }
  crearFormulario(){
    this.formHistoria = this.fb.group({
      asunto: ['',Validators.required],
      miembro: ['',Validators.required],
      descripcion: [''],
      diagnostico:['']
    });
  }
  enviar(){
    this.presentLoading();
    let historia = this.formHistoria.value;
    let node:Node = {
        "type": [{ "target_id": "historial" }],
        "title": [{ "value": historia.asunto }],
        "body": [{ "value": historia.descripcion}],
        "field_diagnostico": [{ "value": historia.diagnostico}],
        "field_miembro":[
          {
              "target_id": historia.miembro,
              "target_type": "node",
              "target_uuid": this.miembros[historia.miembro].uuid,
              "url": "https://familia.sahost.org/node/1"
          }
      ]
    };
    this.drupal.setNode(node).subscribe(resp=>{
      this.formHistoria.reset();
      this.loading.dismiss();
      this.presentAlert('Perfecto','Se guardo el historial satisfactoriamente');
    },error=>{
      console.log('error');
      this.loading.dismiss();
      this.presentAlert('Revisa','No se guardo la información');
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
