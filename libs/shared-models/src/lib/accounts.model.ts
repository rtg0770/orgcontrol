export interface AccountModel {
    id: string;
    name: string;
}

export type AccountRequiredProps = Pick<AccountModel, 'name'>