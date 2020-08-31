import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import {
  IpInspectorFormComponent,
  IpInspectorSearchComponent,
  IpInspectorResultsComponent,
} from './components/ip-inspector-form';

// Feature Modules
import { IpInspectorRoutingModule } from './ip-inspector-routing.module';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Module
import { MaterialModule } from '../shared/material/material.module';

// Ngx Mask Module
import { NgxMaskModule, IConfig } from 'ngx-mask';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

const components = [IpInspectorFormComponent, IpInspectorSearchComponent, IpInspectorResultsComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    IpInspectorRoutingModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(options),
  ],
})
export class IpInspectorModule {}
