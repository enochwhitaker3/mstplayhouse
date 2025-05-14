import { Component } from '@angular/core';
import { MspLogoComponent } from '../../../shared/msp-logo-dark/msp-logo-dark.component';
import { InstaLogoComponent } from "../../../shared/socials/insta.component";
import { FaceLogoComponent } from "../../../shared/socials/face.component";

@Component({
  selector: 'app-sectionthree',
  imports: [MspLogoComponent, InstaLogoComponent, FaceLogoComponent],
  templateUrl: './sectionthree.component.html',
  styleUrl: './sectionthree.component.scss',
})
export class SectionthreeComponent {}
