import { createAction, props } from '@ngrx/store';
import { SpiritModel } from '@agave-spirits/shared-models';

export const spiritsLoaded = createAction(
    '[Spirits API] Spirits Loaded Success',
    props<{spirits: SpiritModel[]} > ()
);

export const spiritCreated = createAction(
    '[Spirits API] Spirit Created',
    props<{spirit: SpiritModel} > ()
);

export const spiritUpdated = createAction(
    '[Spirits API] Spirit Updated',
    props<{spirit: SpiritModel} > ()
);

export const spiritDeleted = createAction(
    '[Spirits API] Spirit Deleted',
    props<{spiritId: string} > ()
);