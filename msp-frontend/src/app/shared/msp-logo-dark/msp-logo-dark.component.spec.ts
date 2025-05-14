import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MspLogoComponent } from './msp-logo-dark.component';

describe('MspLogoComponent', () => {
  let component: MspLogoComponent;
  let fixture: ComponentFixture<MspLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MspLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MspLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
