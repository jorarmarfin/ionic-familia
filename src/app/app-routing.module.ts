import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'detalles/:nid',
    loadChildren: () => import('./pages/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'botiquin',
    loadChildren: () => import('./pages/botiquin/botiquin.module').then( m => m.BotiquinPageModule)
  },
  {
    path: 'vacunas/:nid',
    loadChildren: () => import('./pages/vacunas/vacunas.module').then( m => m.VacunasPageModule)
  },
  {
    path: 'historial/:nid',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'admin-medicamentos',
    loadChildren: () => import('./pages/admin-medicamentos/admin-medicamentos.module').then( m => m.AdminMedicamentosPageModule)
  },
  {
    path: 'admin-historial',
    loadChildren: () => import('./pages/admin-historial/admin-historial.module').then( m => m.AdminHistorialPageModule)
  },
  {
    path: 'admin-vacunas',
    loadChildren: () => import('./pages/admin-vacunas/admin-vacunas.module').then( m => m.AdminVacunasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
