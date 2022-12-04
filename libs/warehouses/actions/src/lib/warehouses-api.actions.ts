import { createAction, props } from '@ngrx/store';
import { WarehouseModel } from '@agave-spirits/shared-models';

export const warehousesLoaded = createAction(
  '[Warehouses API] Warehouses Loaded Success',
  props<{warehouses: WarehouseModel[]} > ()
);

export const warehouseCreated = createAction(
  '[Warehouses API] Warehouse Created',
  props<{warehouse: WarehouseModel} > ()
);

export const warehouseUpdated = createAction(
  '[Warehouses API] Warehouse Updated',
  props<{warehouse: WarehouseModel} > ()
);

export const warehouseDeleted = createAction(
  '[Warehouses API] Warehouse Deleted',
  props<{warehouseId: string} > ()
);