import { Controller, Get, Query } from '@nestjs/common';
import { IpInspectorService } from './ip-inspector.service';
import { Observable } from 'rxjs';
import { InspectIpRequest } from 'src/shared/models';

@Controller()
export class IpInspectorController {
  constructor(private readonly ipInspectorService: IpInspectorService) {}

  @Get('inspect-ip')
  inspectIp(@Query() query: InspectIpRequest): Observable<any> {
    return this.ipInspectorService.queryIpServices(query);
  }
}
