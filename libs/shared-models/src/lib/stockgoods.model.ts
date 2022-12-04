import { SpiritModel } from "./spirit.model";
import { WarehouseModel } from "./warehouse.model";

export enum Unit {
    PCS,
    CRT,
    PAL
}

export interface StockGoodsModel {
    id: string;
    warehouse: WarehouseModel;
    product: SpiritModel;
    description: string;
    stock: number;
    baseUnit: Unit;
}

export type StockGoodsRequiredProps = Pick<StockGoodsModel, 'warehouse' | 'product' | 'stock' | 'baseUnit' | 'description'>