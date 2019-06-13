import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocationMarker } from './location-marker';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<LocationMarker[]> {
    const url = `${environment.apiBaseUrl}/location-history`;
    return this.httpClient.get<LocationMarker[]>(url);
  }

}
