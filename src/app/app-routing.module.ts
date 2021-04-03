import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: '', redirectTo: 'sidebar', pathMatch: 'full'},
  {path: 'sidebar', loadChildren: () => import('./components/sidebar/sidebar.module').then(m => m.SidebarModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
