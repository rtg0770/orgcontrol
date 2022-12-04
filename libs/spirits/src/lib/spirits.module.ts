import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { SpiritsListComponent } from './spirits-list/spirits-list.component';
import { SpiritDetailComponent } from './spirit-detail/spirit-detail.component';
import { SpiritsPageComponent } from './spirits-page/spirits-page.component';
import { SpiritsApiEffects } from './spirits-api.effects';
import { SharedStateSpiritsModule } from '@agave-spirits/shared-state-spirits';
import { SpiritsPresentationPageComponent } from './spirit-presentation-page/spirits-presentation-page.component';
import { SpiritListPresentationComponent } from './spirit-list-presentation/spirit-list-presentation.component';
import { SpiritDetailPresentationComponent } from './spirit-detail-presentation/spirit-detail-presentation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedStateSpiritsModule,
    EffectsModule.forFeature([SpiritsApiEffects]),
    RouterModule.forChild([
      { path: 'organize', pathMatch: 'full', component: SpiritsPageComponent },
      { path: 'presentation', pathMatch: 'full', component: SpiritsPresentationPageComponent }
    ]),
  ],
  declarations: [
    SpiritsListComponent,
    SpiritDetailComponent,
    SpiritsPageComponent,
    SpiritsPresentationPageComponent,
    SpiritListPresentationComponent,
    SpiritDetailPresentationComponent,
  ],
})
export class SpiritsModule {}