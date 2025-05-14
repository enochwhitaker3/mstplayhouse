import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-currently-showing',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './currently-showing.component.html',
  styleUrl: './currently-showing.component.scss'
})
export class CurrentlyShowingComponent {

}
