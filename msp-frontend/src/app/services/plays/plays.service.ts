import { Injectable } from '@angular/core';
import { Play } from '../../interfaces/play';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaysService {
  url = `${environment.apiUrl}plays`;

  constructor(private http: HttpClient) {}
  getAllPlays(): Observable<Play[]> {
    return this.http
      .get<{ value: Play[] }>(this.url)
      .pipe(map((response) => response.value ?? []));
  }
}
