import { createReducer, on, createSelector } from '@ngrx/store';
import { SpiritModel } from '@agave-spirits/shared-models';
import { SpiritsApiActions, SpiritsPageActions } from '@agave-spirits/spirits/actions';

const createSpirit = (spirits: SpiritModel[], spirit: SpiritModel) => [...spirits, spirit];
const updateSpirit = (spirits: SpiritModel[], changes: SpiritModel) =>
  spirits.map((spirit) => {
    return spirit.id === changes.id ? Object.assign({}, spirit, changes) : spirit;
  });
const deleteSpirit = (spirits: SpiritModel[], spiritId: string) =>
  spirits.filter((spirit) => spiritId !== spirit.id);

export interface State {
  collection: SpiritModel[];
  activeSpiritId: string | null;
}

export const initialState: State = {
  collection: [],
  activeSpiritId: null,
};

export const reducer = createReducer(
  initialState,
  on(
    SpiritsPageActions.clearSelectedSpirit, (state) => {
      return {
        ...state,
        activeSpiritId: null,
      }
    }),
  on(SpiritsPageActions.selectSpirit, (state, action) => {
    return {
      ...state,
      activeSpiritId: action.spirit.id,
    }
  }),
  on(SpiritsApiActions.spiritsLoaded, (state, action) => {
    return {
      ...state,
      collection: action.spirits
    }
  }),
  on(SpiritsApiActions.spiritCreated, (state, action) => {
    return {
      collection: createSpirit(state.collection, action.spirit),
      activeSpiritId: null,
    }
  }),
  on(SpiritsApiActions.spiritUpdated, (state, action) => {
    return {
      collection: updateSpirit(state.collection, action.spirit),
      activeSpiritId: null,
    }
  }),
  on(SpiritsApiActions.spiritDeleted, (state, action)=>{
    return {
      ...state,
      collection: deleteSpirit(state.collection, action.spiritId)
    }
  })
);

export const selectAll = (state: State) => state.collection;
export const selectActiveSpiritId = (state: State) => state.activeSpiritId;
export const selectActiveSpirit = createSelector(
  selectAll,
  selectActiveSpiritId,
  (spirits, activeSpiritId) => {
    return spirits.find((spirit) => spirit.id === activeSpiritId) || null;
  }
)