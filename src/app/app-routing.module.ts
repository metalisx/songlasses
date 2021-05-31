import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  {path: 'select', loadChildren: () => import('./components/select/select.module').then(m => m.SelectModule)},
  {path: 'sidebar', loadChildren: () => import('./components/sidebar/sidebar.module').then(m => m.SidebarModule)},
  {path: 'services/root-component-service', 
    loadChildren: () => import('./components/services/root-component-service/root-component-service.module')
      .then(m => m.RootComponentServiceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
