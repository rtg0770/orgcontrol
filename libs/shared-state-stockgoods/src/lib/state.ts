import { NgModule } from '@angular/core';

import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
    StoreModule,
} from '@ngrx/store';

import * as fromStockGoods from './stockgoods.reducer';

export const FEATURE_KEY = "shared-stockgoods";

/**
 * State Shape
 */

export interface State {
    stockgoods: fromStockGoods.State
}

export const reducers: ActionReducerMap<State> = {
    stockgoods: fromStockGoods.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Module
 */

@NgModule({
    imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})

export class SharedStateStockGoodsModule {}
/**
 * Feature Selector
 */
export const selectSharedStockGoodsState = createFeatureSelector<State>(FEATURE_KEY);

/**
 * StockGoods Selectors
 */
export const selectStockGoodsState = createSelector(
    selectSharedStockGoodsState,
    (sharedStockGoodsFeatureState) => sharedStockGoodsFeatureState.stockgoods
);

export const selectAllStockGoods = createSelector(
    selectStockGoodsState,
    fromStockGoods.selectAll
);

export const selectActiveStockgood = createSelector(
    selectStockGoodsState,
    fromStockGoods.selectActiveStockgood
);