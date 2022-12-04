import { createAction, props } from '@ngrx/store';
import { WarehouseModel, WarehouseRequiredProps } from '@agave-spirits/shared-models';

export const enter = createAction('[Warehouses Page] Enter');

export const selectWarehouse = createAction(
    '[Warehouses Page] Select Warehouse',
    props<{ warehouse: WarehouseModel } > ()
);

export const clearSelectedWarehouse = createAction(
    '[Warehouses Page] Clear Selected Warehouse'
);

export const createWarehouse = createAction(
    '[Warehouses Page] Create Warehouse',
    props< { warehouse: WarehouseRequiredProps } > ()
);

export const updateWarehouse = createAction(
    '[Warehouses Page] Update Warehouse',
    props< { warehouseId: string, changes: WarehouseRequiredProps } > ()
);

export const deleteWarehouse = createAction(
    '[Warehouses Page] Delete Warehouse',
    props< { warehouseId: string } > ()
);