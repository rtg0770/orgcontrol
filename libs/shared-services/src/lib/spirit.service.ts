import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { SpiritModel, SpiritRequiredProps } from '@agave-spirits/shared-models';

const BASE_URL = 'http://localhost:3000/spirits';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SpiritsService {
  constructor(private http: HttpClient) { }
  all() {
    return this.http.get<SpiritModel[]>(BASE_URL);
  }
  load(id: string) {
    return this.http.get<SpiritModel>(`${BASE_URL}/${id}`);
  }

  create(spiritProps: SpiritRequiredProps) {
    const Spirit: SpiritModel = {
      id: uuid.v4(),
      ...spiritProps,
    };

    return this.http.post<SpiritModel>(
      `${BASE_URL}`,
      JSON.stringify(Spirit),
      HEADER
    );
  }

  update(id: string, updates: SpiritRequiredProps) {
    return this.http.patch<SpiritModel>(
      `${BASE_URL}/${id}`,
      JSON.stringify(updates),
      HEADER
    );
  }

  delete(id: string) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }

}