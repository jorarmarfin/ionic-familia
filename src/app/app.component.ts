import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Medicamentos', url: '/admin-medicamentos', icon: 'list' },
    { title: 'Historial', url: '/admin-historial', icon: 'layers' },
    { title: 'Vacunas', url: '/admin-vacunas', icon: 'thermometer' }
  ];
  constructor() {}
}
