import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { WarehousesListComponent } from './warehouses-list/warehouses-list.component';
import { WarehousesPageComponent } from './warehouses-page/warehouses-page.component';
import { WarehouseDetailComponent } from './warehouse-detail/warehouse-detail.component';
import { WarehousesApiEffects } from './warehouses-api.effects';
import { SharedStateSpiritsModule } from '@agave-spirits/shared-state-spirits';
import { SharedStateWarehousesModule } from '@agave-spirits/shared-state-warehouses';

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: WarehousesPageComponent },
    ]),
    EffectsModule.forFeature([ WarehousesApiEffects ]),
    SharedStateWarehousesModule,
    SharedStateSpiritsModule,
  ],
  declarations: [
    WarehousesListComponent,
    WarehousesPageComponent,
    WarehouseDetailComponent
  ],
})

export class WarehousesModule {}