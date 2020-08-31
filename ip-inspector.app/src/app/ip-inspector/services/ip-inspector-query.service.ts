import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { InspectQueryPayload } from '../models';

@Injectable({
  providedIn: 'root',
})
export class IpInspectorQueryService {
  constructor(private httpClient: HttpClient) {}

  query(payload: InspectQueryPayload): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/inspect-ip?ip=${payload.ip}&services=${payload.services.join(',')}`);
  }
}
