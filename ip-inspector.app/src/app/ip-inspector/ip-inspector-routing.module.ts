import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { IpInspectorFormComponent } from './components/ip-inspector-form';

const routes: Routes = [
  {
    path: '',
    component: IpInspectorFormComponent,
    data: { title: 'IP Inspector' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpInspectorRoutingModule {}
