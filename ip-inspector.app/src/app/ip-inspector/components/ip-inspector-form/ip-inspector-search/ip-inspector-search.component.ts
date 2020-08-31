import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AvailableService, InspectQueryPayload } from 'src/app/ip-inspector/models';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-ip-inspector-search',
  templateUrl: './ip-inspector-search.component.html',
  styleUrls: ['./ip-inspector-search.component.scss'],
})
export class IpInspectorSearchComponent implements OnInit {
  services: AvailableService[] = [
    { name: 'Ping', selected: false },
    { name: 'GeoIP', selected: false },
    { name: 'ReverseDNS', selected: false },
  ];
  ipInput: FormControl;
  domainInput: FormControl;

  @Output()
  inspectQuery: EventEmitter<InspectQueryPayload> = new EventEmitter<InspectQueryPayload>();

  constructor() {}

  // TODO: create enum for services names

  ngOnInit(): void {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.domainInput = new FormControl('', Validators.pattern(reg));
    this.ipInput = new FormControl('');
  }

  onToggleService(service: AvailableService, queryType: MatButtonToggleGroup): void {
    if (!(service.name === 'ReverseDNS' && queryType.value === 'Domain')) {
      service.selected = !service.selected;
    }
  }

  isQueryTypeStateNotEmpty(queryType: MatButtonToggleGroup): boolean {
    if (queryType.value === 'IP') {
      return !!this.ipInput.value;
    } else {
      return !!this.domainInput.value;
    }
  }

  onQueryTypeChange(event: MatButtonToggleGroup): void {
    if (event.value === 'Domain') {
      this.services = this.services.map((s) => {
        if (s.name === 'ReverseDNS') {
          s.selected = false;
        }

        return s;
      });
    }

    this.ipInput.reset();
    this.domainInput.reset();
  }

  queryIp(queryType: MatButtonToggleGroup): void {
    const isValid = queryType.value === 'IP' ? this.ipInput.valid : this.domainInput.valid;
    if (isValid) {
      const ip = this.ipInput.value || this.domainInput.value;
      const services = this.services.filter((s) => s.selected).map((s) => s.name);
      this.inspectQuery.emit({ ip, services });
    }
  }
}
