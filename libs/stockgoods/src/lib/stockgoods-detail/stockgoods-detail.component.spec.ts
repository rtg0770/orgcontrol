import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockgoodsDetailComponent } from './stockgoods-detail.component';

describe('StockgoodsDetailComponent', () => {
  let component: StockgoodsDetailComponent;
  let fixture: ComponentFixture<StockgoodsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockgoodsDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockgoodsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
