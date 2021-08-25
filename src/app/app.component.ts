import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DrupalService } from './services/drupal.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Botiquín', url: '/botiquin', icon: 'archive' }
  ];
  public labels = [
    { title: 'Medicamentos', url: '/admin-medicamentos', icon: 'list' },
    { title: 'Historial', url: '/admin-historial', icon: 'layers' },
    { title: 'Vacunas', url: '/admin-vacunas', icon: 'thermometer' },
  ];
  constructor(
    private drupal:DrupalService,
    private storage: Storage,
    private router:Router) {}
  async actualizarStorage(){
    const storage = await this.storage.create();
    this.drupal.getMiembros().subscribe(resp=>{
      this.drupal.eliminarStorage();
      this.drupal.guardarStorage(resp);
    });
  }
}
