import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritsListComponent } from './spirits-list.component';

describe('SpiritsListComponent', () => {
  let component: SpiritsListComponent;
  let fixture: ComponentFixture<SpiritsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiritsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
