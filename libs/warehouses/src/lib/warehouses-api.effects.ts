import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, exhaustMap, concatMap, mergeMap } from 'rxjs/operators';
import { WarehousesService } from '@agave-spirits/shared-services';
import { WarehousesApiActions, WarehousesPageActions } from '@agave-spirits/warehouses/actions';
import { StockGoodsPageActions } from '@agave-spirits/stockgoods/actions';

@Injectable()
export class WarehousesApiEffects {
    dialog: any;
    constructor(private warehousesService: WarehousesService, private actions$: Actions) { }

    loadWarehouses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WarehousesPageActions.enter, StockGoodsPageActions.enter),
            exhaustMap(() => {
                return this.warehousesService
                    .all()
                    .pipe((map((warehouses) => WarehousesApiActions.warehousesLoaded({ warehouses }))))
            })
        );
    });

    createWarehouse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WarehousesPageActions.createWarehouse),
            concatMap((action) =>
                this.warehousesService
                    .create(action.warehouse)
                    .pipe((map((warehouse) => WarehousesApiActions.warehouseCreated({ warehouse }))))
            )
        )
    );

    updateWarehouse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WarehousesPageActions.updateWarehouse),
            concatMap((action) =>
                this.warehousesService
                    .update(action.warehouseId, action.changes)
                    .pipe((map((warehouse) => WarehousesApiActions.warehouseUpdated({ warehouse })))))
        ));

    deleteWarehouse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WarehousesPageActions.deleteWarehouse),
            mergeMap((action) =>
                this.warehousesService
                    .delete(action.warehouseId)
                    .pipe((map(() => WarehousesApiActions.warehouseDeleted({ warehouseId: action.warehouseId }))))
            )));
}