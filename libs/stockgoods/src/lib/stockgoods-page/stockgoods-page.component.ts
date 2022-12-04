import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StockGoodsPageActions } from '@agave-spirits/stockgoods/actions';
import { selectAllWarehouses } from '@agave-spirits/shared-state-warehouses';
import { selectAllSpirits } from '@agave-spirits/shared-state-spirits';
import { StockGoodsModel, SpiritModel, WarehouseModel, StockGoodsRequiredProps } from '@agave-spirits/shared-models';
import { selectActiveStockgood, selectAllStockGoods } from '@agave-spirits/shared-state-stockgoods';

@Component({
  selector: 'agave-spirits-stockgoods-page',
  templateUrl: './stockgoods-page.component.html',
  styleUrls: ['./stockgoods-page.component.scss'],
})

export class StockgoodsPageComponent implements OnInit {
  stockgoods$: Observable<StockGoodsModel[]>;
  spirits$: Observable<SpiritModel[]>;
  warehouses$: Observable<WarehouseModel[]>;
  currentStockgood$: Observable<StockGoodsModel | null>;

  constructor(private store: Store) {
    this.stockgoods$ = this.store.select(selectAllStockGoods);
    this.warehouses$ = this.store.select(selectAllWarehouses);
    this.spirits$ = this.store.select(selectAllSpirits);
    this.currentStockgood$ = this.store.select(selectActiveStockgood);
  }

  ngOnInit() {
    this.store.dispatch(StockGoodsPageActions.enter());
  }

  onSelect(stockgood: StockGoodsModel) {
    this.store.dispatch(
      StockGoodsPageActions.selectStockGood({ stockgood })
    )
  }

  onCancel() {
    this.removeSelectedStockGoods();
  }

  removeSelectedStockGoods() {
    this.store.dispatch(
      StockGoodsPageActions.clearSelectedStockGood()
    )
  }

  onSave(stockgood: StockGoodsRequiredProps | StockGoodsModel) {
    if('id' in stockgood) {
      this.updateStockGoods(stockgood)
    } else (
      this.saveStockGoods(stockgood)
    );
  }

  saveStockGoods(stockgoodsProps: StockGoodsRequiredProps) {
    this.store.dispatch(StockGoodsPageActions.createStockGood({stockgood: stockgoodsProps}))
  }

  updateStockGoods(stockgood: StockGoodsModel) {
    this.store.dispatch(
      StockGoodsPageActions.updateStockGood({stockgoodId: stockgood.id, changes: stockgood})
    )
  }
  
  onSearch(searchTerm: string) {
    this.store.dispatch(
      StockGoodsPageActions.searchStockGood({searchTerm})
    )
  }

  onDelete(stockgood: StockGoodsModel){
    this.store.dispatch(
      StockGoodsPageActions.deleteStockGood({stockgoodId: stockgood.id})
    )
  }
}