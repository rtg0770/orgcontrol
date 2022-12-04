import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousesPageComponent } from './warehouses-page.component';

describe('WarehousesPageComponent', () => {
  let component: WarehousesPageComponent;
  let fixture: ComponentFixture<WarehousesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehousesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WarehousesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
