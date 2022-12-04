import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { StockGoodsModel, StockGoodsRequiredProps } from '@agave-spirits/shared-models';

const BASE_URL = 'http://localhost:3000/stockgoods';
const HEADER = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class StockGoodsService {
    constructor(private http: HttpClient) { }
    all() {
        return this.http.get<StockGoodsModel[]>(BASE_URL);
    }
    load(id: string) {
        return this.http.get<StockGoodsModel>(`${BASE_URL}/${id}`);
    }
    delete(id: string) {
        return this.http.delete(`${BASE_URL}/${id}`);
    }
    create(stockGoodsProps: StockGoodsRequiredProps) {
        const Stockgoods: StockGoodsModel = {
            id: uuid.v4(),
            ...stockGoodsProps
        };

        return this.http.post<StockGoodsModel>(
            `${BASE_URL}`,
            JSON.stringify(Stockgoods),
            HEADER
        );

    }
    update(id: string, updates: StockGoodsRequiredProps) {
        return this.http.patch<StockGoodsModel>(
            `${BASE_URL}/${id}`,
            JSON.stringify(updates),
            HEADER
        )
    }
}