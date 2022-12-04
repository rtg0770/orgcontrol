import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MezcalComponent } from './mezcal.component';

describe('MezcalComponent', () => {
  let component: MezcalComponent;
  let fixture: ComponentFixture<MezcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MezcalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MezcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
