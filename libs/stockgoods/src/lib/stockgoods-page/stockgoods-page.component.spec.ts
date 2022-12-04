import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockgoodsPageComponent } from './stockgoods-page.component';

describe('StockgoodsPageComponent', () => {
  let component: StockgoodsPageComponent;
  let fixture: ComponentFixture<StockgoodsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockgoodsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockgoodsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
