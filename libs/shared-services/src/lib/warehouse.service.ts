import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { WarehouseModel, WarehouseRequiredProps } from '@agave-spirits/shared-models';

const BASE_URL = 'http://localhost:3000/warehouses';
const HEADER = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class WarehousesService {
    constructor(private http: HttpClient) { }
    all() {
        return this.http.get<WarehouseModel[]>(BASE_URL);
    }
    load(id: string) {
        return this.http.get<WarehouseModel>(`${BASE_URL}/${id}`);
    }

    create(warehouseProps: WarehouseRequiredProps) {
        const Warehouse: WarehouseModel = {
            id: uuid.v4(),
            ...warehouseProps,
        };

        return this.http.post<WarehouseModel>(
            `${BASE_URL}`,
            JSON.stringify(Warehouse),
            HEADER
        );
    }

    update(id: string, updates: WarehouseRequiredProps) {
        return this.http.patch<WarehouseModel>(
            `${BASE_URL}/${id}`,
            JSON.stringify(updates),
            HEADER
        )
    }

    delete(id: string) {
        return this.http.delete(`${BASE_URL}/${id}`);
    }
}