import { createAction, props } from '@ngrx/store';
import { StockGoodsModel } from '@agave-spirits/shared-models';

export const stockgoodsLoaded = createAction(
    '[StockGoods API] StockGoods Loaded Success',
    props< { stockgoods: StockGoodsModel[] } > ()
);

export const stockgoodsCreated = createAction(
    '[StockGoods API] StockGoods Created',
    props<{ stockgood: StockGoodsModel } > ()
);

export const stockgoodsUpdated = createAction(
    '[StockGoods API] StockGoods Updated',
    props<{ stockgood: StockGoodsModel } > ()
);

export const stockgoodsDeleted = createAction(
    '[StockGoods API] StockGoods Deleted',
    props<{ stockgoodId: string } > ()
);