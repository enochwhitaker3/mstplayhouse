import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-face-logo',
  imports: [],
  template: `
  <a href="https://www.facebook.com/tremontonplayhouse/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      [attr.fill]="lightStyle ? '#191a18' : '#ECE6D8'"
      viewBox="0 0 24 24"
    >
      <path
        d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"
      ></path>
    </svg>
  </a>`,
  styles: [
    `
      svg {
        cursor: pointer;
      }
    `,
  ],
})
export class FaceLogoComponent {
  @Input() lightStyle: boolean = true;
}
