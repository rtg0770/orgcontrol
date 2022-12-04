import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountsPageComponent } from './accounts-page/accounts-page.component';
import { AccountsDetailComponent } from './accounts-detail/accounts-detail.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { SearchAccountsBoxComponent } from './search-accounts-box/search-accounts-box.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AccountsPageComponent },
    ]),
  ],
  declarations: [
    AccountsPageComponent,
    AccountsDetailComponent,
    AccountsListComponent,
    SearchAccountsBoxComponent,
  ],
})
export class AccountsModule {}
