import { NgModule } from '@angular/core';

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';

import * as fromWarehouses from './warehouses.reducer';

export const FEATURE_KEY = 'shared-warehouses';

/**
 * State Shape
 **/

export interface State {
  warehouses: fromWarehouses.State
}

export const reducers: ActionReducerMap<State> = {
  warehouses: fromWarehouses.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Module
 **/

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})

export class SharedStateWarehousesModule { }
/**
 * Feature Selector
 **/
export const selectSharedWarehousesState = createFeatureSelector<State>(FEATURE_KEY);

/**
* Warehouses Selectors
*/
export const selectWarehousesState = createSelector(
  selectSharedWarehousesState,
  (sharedWarehousesFeatureState) => sharedWarehousesFeatureState.warehouses
);

export const selectAllWarehouses = createSelector(
  selectWarehousesState,
  fromWarehouses.selectAll
);

export const selectActiveWarehouse = createSelector(
  selectWarehousesState,
  fromWarehouses.selectActiveWarehouse
);
