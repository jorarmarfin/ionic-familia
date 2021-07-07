import { Component, OnInit } from '@angular/core';
import { Miembros } from 'src/app/interfaces/Miembros.interface';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public miembros: Miembros;

  constructor(private drupal:DrupalService) { }

  ngOnInit() {
    this.drupal.getMiembros().subscribe(resp=>{
      this.miembros = resp;
    })
  }
  onClick(uuid:string){
    console.log(uuid);
  }

}
