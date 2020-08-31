import { Injectable } from '@nestjs/common';
import { InspectIpRequest } from 'src/shared/models';
import { AvailableServices } from '../shared/enums';
import { Observable, of, throwError, forkJoin } from 'rxjs';

import workerpool = require('workerpool');

function pingFunction(ip: string) {
  const domainPing = require('domain-ping');
  return domainPing(ip);
}

function reverseDnsFunction(ip: string) {
  const dns = require('dns');
  return dns.promises.reverse(ip);
}

function geoIpFunction(ip: string) {
  const geoip = require('geoip-lite');
  return geoip.lookup(ip);
}

@Injectable()
export class IpInspectorService {
  // we create a pool of max 5 workers
  private pool = workerpool.pool({ maxWorkers: 5 });

  queryIpServices(query: InspectIpRequest): Observable<any> {
    if (!query.ip) {
      return of(null);
    }

    const servicesNotSpecified = !query.services || query.services.length === 0;

    if (servicesNotSpecified) {
      // by default we execute the ping service task
      try {
        const result = this.pingIp(query.ip, AvailableServices.Ping);
        return result;
      } catch (error) {
        return error;
      }
    } else {
      try {
        const availableServices = query.services.split(',');
        const availableServicesObservables = availableServices.map(service => {
          switch (service) {
            case AvailableServices.Ping:
              return this.pingIp(query.ip, service);
            case AvailableServices.ReverseDNS:
              return this.reverseDns(query.ip, service);
            case AvailableServices.GeoIP:
              return this.lookGeoIp(query.ip, service);
            default:
              return this.pingIp(query.ip, service);
          }
        });

        const result$ = forkJoin(availableServicesObservables);
        result$.subscribe();
        return result$;
      } catch (error) {
        return error;
      }
    }
  }

  pingIp(ip: string, service: string): Observable<any> {
    return this.pool
      .exec(pingFunction, [ip])
      .then((res: any) => {
        return { service, res };
      })
      .catch((err: any) => {
        return throwError(err);
      });
  }

  reverseDns(ip: string, service: string): Observable<any> {
    return this.pool
      .exec(reverseDnsFunction, [ip])
      .then((res: any) => {
        return { service, res };
      })
      .catch((err: any) => {
        return throwError(err);
      });
  }

  lookGeoIp(ip: string, service: string): Observable<any> {
    return this.pool
      .exec(geoIpFunction, [ip])
      .then((res: any) => {
        return { service, res };
      })
      .catch((err: any) => {
        return throwError(err);
      });
  }
}
