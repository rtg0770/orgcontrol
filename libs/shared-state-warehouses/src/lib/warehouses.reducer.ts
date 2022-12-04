import { createReducer, on, createSelector } from '@ngrx/store';
import { WarehouseModel } from '@agave-spirits/shared-models';
import { WarehousesApiActions, WarehousesPageActions } from '@agave-spirits/warehouses/actions';

const createWarehouse = (warehouses: WarehouseModel[], warehouse: WarehouseModel) => [...warehouses, warehouse];

const updateWarehouse = (warehouses: WarehouseModel[], changes: WarehouseModel) =>
    warehouses.map((warehouse) => {
        return warehouse.id === changes.id ? Object.assign({}, warehouse, changes) : warehouse;
    });
const deleteWarehouse = (warehouses: WarehouseModel[], warehouseId: string) =>
    warehouses.filter((warehouse) => warehouseId !== warehouse.id);

export interface State {
    collection: WarehouseModel[];
    activeWarehouseId: string | null;
}

export const initialState: State = {
    collection: [],
    activeWarehouseId: null
};

export const reducer = createReducer(
    initialState,
    on(
        WarehousesPageActions.enter,
        WarehousesPageActions.clearSelectedWarehouse, (state) => {
            return {
                ...state,
                activeWarehouseId: null,
            }
        }
    ),
    on(WarehousesPageActions.selectWarehouse, (state, action) => {
        return {
            ...state,
            activeWarehouseId: action.warehouse.id
        }
    }),
    on(WarehousesApiActions.warehousesLoaded, (state, action) => {
        return {
            ...state,
            collection: action.warehouses
        }
    }),
    on(WarehousesApiActions.warehouseCreated, (state, action) => {
        return {
            collection: createWarehouse(state.collection, action.warehouse),
            activeWarehouseId: null
        }
    }),
    on(WarehousesApiActions.warehouseUpdated, (state, action) => {
        return {
            collection: updateWarehouse(state.collection, action.warehouse),
            activeWarehouseId: null
        }
    }),
    on(WarehousesApiActions.warehouseDeleted, (state, action) => {
        return {
            ...state,
            collection: deleteWarehouse(state.collection, action.warehouseId)
        }
    })
)

export const selectAll = (state: State) => state.collection;
export const selectActiveWarehouseId = (state: State) => state.activeWarehouseId;
export const selectActiveWarehouse = createSelector(
    selectAll,
    selectActiveWarehouseId,
    (warehouses, activeWarehouseId) => {
        return warehouses.find((warehouse) => warehouse.id === activeWarehouseId) || null;
    }
)