import { createAction, props } from "@ngrx/store";
import { AccountModel } from "@agave-spirits/shared-models";

export const accountsLoaded = createAction(
    '[Accounts API] Accounts Loaded Success',
    props< { accounts: AccountModel[] } > ()
);

export const accountsCreated = createAction(
    '[Accounts API] Account Created',
    props< { account: AccountModel } > ()
);

export const accountUpdated = createAction(
    '[Accounts API] Account Updated',
    props< { account: AccountModel } > ()
);

export const accountDeleted = createAction(
    '[Accounts API] Account Deleted',
    props< { accountId: string } > ()
);