import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-currently-showing',
  imports: [CommonModule, ButtonComponent, FooterComponent],
  templateUrl: './currently-showing.component.html',
  styleUrl: './currently-showing.component.scss'
})
export class CurrentlyShowingComponent {

}
