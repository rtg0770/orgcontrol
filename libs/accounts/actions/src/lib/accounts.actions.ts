import { createAction, props } from "@ngrx/store";
import { AccountModel, AccountRequiredProps } from "@agave-spirits/shared-models";

export const enter = createAction(
  '[Accounts Page] enter'
);

export const selectAccount = (
  '[Accounts Page] Select Account',
  props< { account: AccountModel } >()
);

export const createAccount = ('[Accounts Page] Create Account');

export const clearSelectedAccount = ('[Accounts Page] Clear Selected Account');

export const updateAccount = ('[Accounts Page] Update Account');

export const deleteAccount = ('[Accounts Page] Delete Account');

export const searchAccount = ('[Accounts Page] Search Account');