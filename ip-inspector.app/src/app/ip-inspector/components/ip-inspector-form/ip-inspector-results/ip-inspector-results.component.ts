import { Component, Input, OnChanges } from '@angular/core';
import { IpInspectorQueryService } from 'src/app/ip-inspector/services/ip-inspector-query.service';
import { InspectQueryPayload } from 'src/app/ip-inspector/models';

@Component({
  selector: 'app-ip-inspector-results',
  templateUrl: './ip-inspector-results.component.html',
  styleUrls: ['./ip-inspector-results.component.scss'],
})
export class IpInspectorResultsComponent implements OnChanges {
  @Input()
  queryEvent: InspectQueryPayload;

  results: any = { service: '', res: '' };

  constructor(private ipInspectorService: IpInspectorQueryService) {}

  ngOnChanges(): void {
    if (this.queryEvent) {
      this.ipInspectorService.query(this.queryEvent).subscribe((res) => {
        this.results = res;
      });
    }
  }
}
