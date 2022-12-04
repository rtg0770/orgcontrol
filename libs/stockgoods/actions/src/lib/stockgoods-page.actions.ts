import { createAction, props } from '@ngrx/store';
import { StockGoodsModel, StockGoodsRequiredProps } from '@agave-spirits/shared-models';

export const enter = createAction(
    '[StockGoods Page] Enter'
);

export const selectStockGood = createAction(
    '[StockGoods Page] Select StockGoods',
    props<{ stockgood: StockGoodsModel }>()
);

export const createStockGood = createAction(
    '[StockGoods Page] Create Stock Goods',
    props<{ stockgood: StockGoodsRequiredProps }>()
);

export const clearSelectedStockGood = createAction(
    '[StockGoods Page] Clear Selected StockGoods'
);

export const updateStockGood = createAction(
    '[StockGoods Page] Update StockGoods',
    props<{ stockgoodId: string, changes: StockGoodsRequiredProps }>()
);

export const deleteStockGood = createAction(
    '[StockGoods Page] Delete StockGoods',
    props<{ stockgoodId: string }>()
);

export const searchStockGood = createAction(
    '[StockGoods Page] Search StockGoods',
    props<{ searchTerm: string }> ()
)