export interface WarehouseModel {
    id: string;
    location: string;
    telephone: string;
    email: string;
    contactName: string;
}

export type WarehouseRequiredProps = Pick<WarehouseModel, 'location' | 'contactName' | 'email' | 'telephone'>