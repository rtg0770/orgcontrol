import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritsPresentationPageComponent } from './spirits-presentation-page.component';

describe('SpiritsPresentationPageComponent', () => {
  let component: SpiritsPresentationPageComponent;
  let fixture: ComponentFixture<SpiritsPresentationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiritsPresentationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritsPresentationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
