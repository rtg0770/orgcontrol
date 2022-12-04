import { NgModule } from '@angular/core';

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';

import * as fromSpirits from './spirits.reducer';

export const FEATURE_KEY = 'shared-spirits';

/**
 * State Shape
 **/

export interface State {
  spirits: fromSpirits.State;
}

export const reducers: ActionReducerMap<State> = {
  spirits: fromSpirits.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Module
 **/

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class SharedStateSpiritsModule {}
/**
 * Feature Selector
 **/
export const selectSharedSpiritsState = createFeatureSelector<State>(FEATURE_KEY);

/**
* Spirits Selectors
*/

export const selectSpiritsState = createSelector(
  selectSharedSpiritsState,
  (sharedSpiritsFeatureState) => sharedSpiritsFeatureState.spirits
);

export const selectAllSpirits = createSelector(
  selectSpiritsState,
  fromSpirits.selectAll
);
export const selectActiveSpirit = createSelector(
  selectSpiritsState,
  fromSpirits.selectActiveSpirit
);