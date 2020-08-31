import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ip-inspector',
    pathMatch: 'full'
  },
  {
    path: 'ip-inspector',
    loadChildren: () =>
      import('./ip-inspector/ip-inspector.module').then((m) => m.IpInspectorModule)
  },
  {
    path: '**',
    redirectTo: 'ip-inspector'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
