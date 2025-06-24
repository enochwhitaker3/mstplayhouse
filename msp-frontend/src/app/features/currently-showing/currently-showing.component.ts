import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { environment } from '../../../environments/environment';
import { Play } from '../../interfaces/play';
import { LoaderDarkComponent } from '../../shared/loader-dark/loader-dark.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currently-showing',
  imports: [CommonModule, ButtonComponent, LoaderDarkComponent, FooterComponent],
  templateUrl: './currently-showing.component.html',
  styleUrl: './currently-showing.component.scss'
})
export class CurrentlyShowingComponent {
  currentPlay!: Play;
  loading = true;
  baseUrl = environment.apiUrl;
  playId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    fetch(`${this.baseUrl}/GetPlays`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      this.playId = this.route.snapshot.paramMap.get('id');
      if (this.playId) {
        data.value = data.value.filter((play: Play) => play.id === Number(this.playId));
      }
      this.currentPlay = data.value[0];
      this.loading = false;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      this.loading = false;
    });
  }
}
