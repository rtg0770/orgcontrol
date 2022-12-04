import { createReducer, on, createSelector } from '@ngrx/store';
import { StockGoodsModel } from '@agave-spirits/shared-models';
import { StockGoodsApiActions, StockGoodsPageActions } from '@agave-spirits/stockgoods/actions';

const createStockgood = (stockgoods: StockGoodsModel[], stockgood: StockGoodsModel) => [...stockgoods, stockgood];
const updateStockgood = (stockgoods: StockGoodsModel[], changes: StockGoodsModel) =>
    stockgoods.map((stockgood) => {
        return stockgood.id === changes.id ? Object.assign({}, stockgood, changes): stockgood;
});
const deleteStockGood = (stockgoods: StockGoodsModel[], stockgoodId: string ) => stockgoods.filter((stockgood) => stockgoodId !== stockgood.id);

export interface State {
    collection: StockGoodsModel[];
    activeStockgoodId: string | null;
}

export const initialState: State = {
    collection: [],
    activeStockgoodId: null
}

export const reducer = createReducer(
    initialState,
    on(
        StockGoodsPageActions.clearSelectedStockGood, (state) => {
            return {
                ...state,
                activeStockgoodId: null,
            }
        }
    ),
    on(StockGoodsPageActions.selectStockGood, (state, action) => {
        return {
            ...state,
            activeStockgoodId: action.stockgood.id,
        }
    }),
    on(StockGoodsApiActions.stockgoodsLoaded, (state, action) => {
        return {
            ...state,
            collection: action.stockgoods
        }
    }),
    on(StockGoodsApiActions.stockgoodsCreated, (state, action) => {
        return {
            collection: createStockgood(state.collection, action.stockgood),
            activeStockgoodId: null
        }
    }),
    on(StockGoodsApiActions.stockgoodsUpdated, (state, action) => {
        return {
            collection: updateStockgood(state.collection, action.stockgood),
            activeStockgoodId: null
        }
    }),
    on(StockGoodsApiActions.stockgoodsDeleted, (state, action) => {
        return {
            ...state,
            collection: deleteStockGood(state.collection, action.stockgoodId)
        }
    })
);

export const selectAll = (state: State) => state.collection;
export const selectActiveStockgoodId = (state: State) => state.activeStockgoodId;
export const selectActiveStockgood = createSelector(
    selectAll,
    selectActiveStockgoodId,
    (stockgoods, selectActiveStockgoodId) => {
        return stockgoods.find((stockgood)=> stockgood.id === selectActiveStockgoodId) || null;
    }
)