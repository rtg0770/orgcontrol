import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockgoodsListComponent } from './stockgoods-list.component';

describe('StockgoodsListComponent', () => {
  let component: StockgoodsListComponent;
  let fixture: ComponentFixture<StockgoodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockgoodsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockgoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
