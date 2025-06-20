import { Component, Input } from '@angular/core';
import { MspLogoComponent } from '../msp-logo-dark/msp-logo-dark.component';
import { MspLogoComponent as MspLogoComponentLight } from '../msp-logo/msp-logo.component';
import { InstaLogoComponent } from "../socials/insta.component";
import { FaceLogoComponent } from "../socials/face.component";

@Component({
  selector: 'app-footer',
  imports: [MspLogoComponent, MspLogoComponentLight, InstaLogoComponent, FaceLogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() lightStyle: boolean = true;
}
