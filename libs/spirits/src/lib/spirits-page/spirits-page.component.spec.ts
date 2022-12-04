import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritsPageComponent } from './spirits-page.component';

describe('SpiritsPageComponent', () => {
  let component: SpiritsPageComponent;
  let fixture: ComponentFixture<SpiritsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiritsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
