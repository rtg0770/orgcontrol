import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, exhaustMap, concatMap } from 'rxjs/operators';
import { SpiritsService } from '@agave-spirits/shared-services';
import { SpiritsApiActions, SpiritsPageActions, SpiritsPresentationPageActions } from '@agave-spirits/spirits/actions';
import { StockGoodsPageActions } from '@agave-spirits/stockgoods/actions';

@Injectable()
export class SpiritsApiEffects {
  constructor(private spiritsService: SpiritsService, private actions$: Actions) { }

  loadSpirits$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SpiritsPageActions.enter, SpiritsPresentationPageActions.enter, StockGoodsPageActions.enter),
      exhaustMap(() => {
        return this.spiritsService
          .all()
          .pipe((map((spirits) => SpiritsApiActions.spiritsLoaded({ spirits }))))
      })
    );
  });

  createSpirit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpiritsPageActions.createSpirit),
      concatMap((action) =>
        this.spiritsService
          .create(action.spirit)
          .pipe((map((spirit) => SpiritsApiActions.spiritCreated({ spirit })))
          )
      )
    )
  );

  updateSpirit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpiritsPageActions.updateSpirit),
      concatMap((action) =>
        this.spiritsService
          .update(action.spiritId, action.changes)
          .pipe(map((spirit) => SpiritsApiActions.spiritUpdated({ spirit })))
      )
    )
  );

  deleteSpirit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpiritsPageActions.deleteSpirit),
      mergeMap((action) =>
        this.spiritsService
          .delete(action.spiritId)
          .pipe((map(()=> SpiritsApiActions.spiritDeleted({ spiritId: action.spiritId }))))
  )));
}