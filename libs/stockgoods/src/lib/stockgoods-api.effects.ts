import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, exhaustMap, concatMap, mergeMap } from 'rxjs/operators';
import { StockGoodsService } from '@agave-spirits/shared-services';
import { StockGoodsApiActions, StockGoodsPageActions } from '@agave-spirits/stockgoods/actions';

@Injectable()
export class StockGoodsApiEffects {
    constructor(private stockGoodsService: StockGoodsService, private actions$: Actions) { }
    loadStockGoods$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StockGoodsPageActions.enter),
            exhaustMap(() => {
                return this.stockGoodsService
                    .all()
                    .pipe((map((stockgoods) => StockGoodsApiActions.stockgoodsLoaded({ stockgoods }))))
            })
        );
    });

    createStockgood$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StockGoodsPageActions.createStockGood),
            concatMap((action) =>
                this.stockGoodsService
                    .create(action.stockgood)
                    .pipe((map((stockgood) => StockGoodsApiActions.stockgoodsCreated({ stockgood })))))
        ));

    updateStockgood$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StockGoodsPageActions.updateStockGood),
            concatMap((action) =>
                this.stockGoodsService
                    .update(action.stockgoodId, action.changes)
                    .pipe((map((stockgood) => StockGoodsApiActions.stockgoodsUpdated({ stockgood })))))
        ));

    deleteStockGood$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StockGoodsPageActions.deleteStockGood),
            mergeMap((action) =>
                this.stockGoodsService
                    .delete(action.stockgoodId)
                    .pipe((map(() => StockGoodsApiActions.stockgoodsDeleted({ stockgoodId: action.stockgoodId }))))
            )));
}