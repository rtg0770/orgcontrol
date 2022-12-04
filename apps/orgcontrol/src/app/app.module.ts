import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RouterModule } from '@angular/router';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SpiritsApiEffects } from '@agave-spirits/spirits';
import { WarehousesApiEffects } from '@agave-spirits/warehouses';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { StockGoodsApiEffects } from '@agave-spirits/stockgoods';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'spirits',
        loadChildren: () =>
          import('@agave-spirits/spirits').then((m) => m.SpiritsModule),
      },
      {
        path: 'warehouses',
        loadChildren: () =>
          import('@agave-spirits/warehouses').then((m) => m.WarehousesModule),
      },
      {
        path: 'stockgoods',
        loadChildren: () =>
          import('@agave-spirits/stockgoods').then((m) => m.StockgoodsModule)
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('@agave-spirits/accounts').then((m) => m.AccountsModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'spirits',
      },
    ]),
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 15,
    }),
    EffectsModule.forRoot([SpiritsApiEffects, WarehousesApiEffects, StockGoodsApiEffects]),
  ],
})
export class AppModule {}
