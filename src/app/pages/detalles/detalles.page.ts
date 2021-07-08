import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  nid:string;

  opciones = [
    { "nombre": "Vacunas" ,"descripcion": "Vacunas recibidas","ruta":'vacunas' },
    { "nombre": "Historial","descripcion": "El historial medico ", "ruta":"historial" },
  ];

  constructor(private activateroute:ActivatedRoute) { }

  ngOnInit() {
    this.activateroute.params.subscribe(resp=>{
      this.nid = resp.nid;
    })
  }

  

}
