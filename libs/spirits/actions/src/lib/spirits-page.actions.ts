import { createAction, props } from '@ngrx/store';
import { SpiritModel, SpiritRequiredProps } from '@agave-spirits/shared-models';

export const enter = createAction('[Spirits Page] Enter');

export const selectSpirit = createAction(
  '[Spirits Page] Select Spirit',
  props<{ spirit: SpiritModel}>()
);

export const clearSelectedSpirit = createAction(
  '[Spirits Page] Clear Selected Spirit'
);

export const createSpirit = createAction(
  '[Spirits Page] Create Spirit',
  props<{ spirit: SpiritRequiredProps }>()
);

export const updateSpirit = createAction(
  '[Spirits Page] Update Spirit',
  props<{ spiritId: string, changes: SpiritRequiredProps }>()
);

export const deleteSpirit = createAction(
  '[Spirits Page] Delete Spirit',
  props<{ spiritId: string }>()
);