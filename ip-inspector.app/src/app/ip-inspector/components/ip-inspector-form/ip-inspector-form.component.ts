import { Component, OnInit } from '@angular/core';
import { InspectQueryPayload } from '../../models';

@Component({
  selector: 'app-ip-inspector-form',
  templateUrl: './ip-inspector-form.component.html',
  styleUrls: ['./ip-inspector-form.component.scss']
})
export class IpInspectorFormComponent implements OnInit {

  queryEvent: InspectQueryPayload;
  constructor() { }

  ngOnInit(): void { }

  inspectQueryEvent(event: InspectQueryPayload): void {
    this.queryEvent = event;
  }

}
