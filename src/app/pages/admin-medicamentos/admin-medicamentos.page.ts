import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-medicamentos',
  templateUrl: './admin-medicamentos.page.html',
  styleUrls: ['./admin-medicamentos.page.scss'],
})
export class AdminMedicamentosPage implements OnInit {
  formMedicamento: FormGroup;

  constructor(private fb:FormBuilder) {
    this.formMedicamento = this.fb.group({
      nombre: [''],
      descripcion: ['']
    });
   }

  ngOnInit() {
  }
  crearFormulario(){
    this.formMedicamento = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: ['']
    });
  }
  enviar(){
    console.log('test');
    let test = this.formMedicamento.value;
    console.log(test.nombre);

  }

}
