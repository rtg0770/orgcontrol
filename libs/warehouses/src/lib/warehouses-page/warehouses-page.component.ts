import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WarehousesApiActions, WarehousesPageActions } from '@agave-spirits/warehouses/actions';
import { WarehouseModel, WarehouseRequiredProps, SpiritModel } from '@agave-spirits/shared-models';
import { selectAllWarehouses, selectActiveWarehouse } from '@agave-spirits/shared-state-warehouses';
import { selectAllSpirits } from '@agave-spirits/shared-state-spirits';

@Component({
  selector: 'agave-spirits-warehouses-page',
  templateUrl: './warehouses-page.component.html',
  styleUrls: ['./warehouses-page.component.scss'],
})
export class WarehousesPageComponent implements OnInit {
  spirits$: Observable<SpiritModel[]>;
  warehouses$: Observable<WarehouseModel[]>;
  currentWarehouse$: Observable<WarehouseModel | null>;

  constructor(private store: Store) {
    this.spirits$ = this.store.select(selectAllSpirits);
    this.warehouses$ = this.store.select(selectAllWarehouses);
    this.currentWarehouse$ = this.store.select(selectActiveWarehouse);
  }

  ngOnInit() {
    this.store.dispatch(WarehousesPageActions.enter());
  }

  onSelect(warehouse: WarehouseModel) {
    this.store.dispatch(
      WarehousesPageActions.selectWarehouse({ warehouse }));
  }

  onCancel() {
    this.removeSelectedWarehouse();
  }

  removeSelectedWarehouse() {
    this.store.dispatch(
      WarehousesPageActions.clearSelectedWarehouse(),
    )
  }

  onSave(warehouse: WarehouseRequiredProps | WarehouseModel) {
    if ('id' in warehouse) {
      this.updateWarehouse(warehouse);
    } else (
      this.saveWarehouse(warehouse)
    );

  }

  saveWarehouse(warehouseProps: WarehouseRequiredProps) {
    this.store.dispatch(WarehousesPageActions.createWarehouse({ warehouse: warehouseProps }))
  }

  updateWarehouse(warehouse: WarehouseModel) {
    this.store.dispatch(
      WarehousesPageActions.updateWarehouse({ warehouseId: warehouse.id, changes: warehouse })
    )
  }

  onDelete(warehouse: WarehouseModel) {
    this.store.dispatch(WarehousesPageActions.deleteWarehouse({ warehouseId: warehouse.id })
    )
  }

}