import { createAction, props } from '@ngrx/store';
import { SpiritModel } from '@agave-spirits/shared-models';

export const enter = createAction('[Spirit Presentation Page] Enter');

export const selectSpirit = createAction(
    '[Spirit Presentation Page] Select bottle',
    props<{ spirit: SpiritModel }>()
);