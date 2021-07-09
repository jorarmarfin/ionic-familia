import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Node } from 'src/app/interfaces/Node.interface';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-admin-medicamentos',
  templateUrl: './admin-medicamentos.page.html',
  styleUrls: ['./admin-medicamentos.page.scss'],
})
export class AdminMedicamentosPage implements OnInit {
  formMedicamento: FormGroup;
  private loading: HTMLIonLoadingElement;

  constructor(
    private fb:FormBuilder,
    private  drupal:DrupalService,
    private loadingController: LoadingController, 
    private alertController: AlertController) {
    this.crearFormulario();
  }

  ngOnInit() {
  }
  crearFormulario(){
    this.formMedicamento = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: [''],
      fecha:['']
    });
  }
  enviar(){
    this.presentLoading();
    let medicamento = this.formMedicamento.value;
    let fecha = new Date(medicamento.fecha);
    let fecha_vencimiento = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`

    let node:Node = {
        "type": [{ "target_id": "medicamentos" }],
        "title": [{ "value": medicamento.nombre }],
        "body": [{ "value": medicamento.descripcion}],
        "field_fecha":[{ "value":fecha_vencimiento}]
    };
    this.drupal.setNode(node).subscribe(resp=>{
      
      this.formMedicamento.reset();
      this.loading.dismiss();
      this.presentAlert('Satisfactorio','Se guardo el medicamento satisfactoriamente');
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
