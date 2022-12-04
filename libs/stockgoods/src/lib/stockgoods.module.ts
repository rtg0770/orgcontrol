import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { StockgoodsListComponent } from './stockgoods-list/stockgoods-list.component';
import { StockgoodsDetailComponent } from './stockgoods-detail/stockgoods-detail.component';
import { StockgoodsPageComponent } from './stockgoods-page/stockgoods-page.component';
import { StockGoodsApiEffects } from './stockgoods-api.effects';
import { SharedStateSpiritsModule } from '@agave-spirits/shared-state-spirits';
import { SharedStateWarehousesModule } from '@agave-spirits/shared-state-warehouses';
import { SpiritsApiEffects } from '@agave-spirits/spirits';
import { WarehousesApiEffects } from '@agave-spirits/warehouses';
import { SharedStateStockGoodsModule } from '@agave-spirits/shared-state-stockgoods';
import { SearchStockgoodsBoxComponent } from './search-stockgoods-box/search-stockgoods-box.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: StockgoodsPageComponent },
    ]),
    EffectsModule.forFeature([
      WarehousesApiEffects,
      StockGoodsApiEffects,
      SpiritsApiEffects,
    ]),
    SharedStateWarehousesModule,
    SharedStateSpiritsModule,
    SharedStateStockGoodsModule,
  ],
  declarations: [
    StockgoodsListComponent,
    StockgoodsDetailComponent,
    StockgoodsPageComponent,
    SearchStockgoodsBoxComponent,
  ],
})
export class StockgoodsModule {}
