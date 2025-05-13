import { Injectable } from '@angular/core';
import { Play } from '../../interfaces/play';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlaysService {
  url = `${environment.apiUrl}plays`;

  async getAllPlays(): Promise<Play[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.value ?? [];
  }
}
