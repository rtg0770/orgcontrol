import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStockgoodsBoxComponent } from './search-stockgoods-box.component';

describe('SearchStockgoodsBoxComponent', () => {
  let component: SearchStockgoodsBoxComponent;
  let fixture: ComponentFixture<SearchStockgoodsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchStockgoodsBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchStockgoodsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
