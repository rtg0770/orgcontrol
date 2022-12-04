/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpiritsApiActions, SpiritsPageActions } from '@agave-spirits/spirits/actions';
import { SpiritModel, SpiritRequiredProps } from '@agave-spirits/shared-models';
import { selectActiveSpirit, selectAllSpirits } from '@agave-spirits/shared-state-spirits';

@Component({
  selector: 'agave-spirits-spirits-page',
  templateUrl: './spirits-page.component.html',
  styleUrls: ['./spirits-page.component.scss'],
})

export class SpiritsPageComponent implements OnInit {
  spirits$: Observable<SpiritModel[]>;
  currentSpirit$: Observable<SpiritModel | null>;

  constructor(private store: Store) {
    this.spirits$ = store.select(selectAllSpirits);
    this.currentSpirit$ = store.select(selectActiveSpirit);
  }

  ngOnInit() {
    this.store.dispatch(SpiritsPageActions.enter());
  }

  onSelect(spirit: SpiritModel) {
    this.store.dispatch(SpiritsPageActions.selectSpirit({ spirit }))
  }

  onCancel() {
    this.removeSelectedSpirit();
  }

  removeSelectedSpirit() {
    this.store.dispatch(SpiritsPageActions.clearSelectedSpirit());
  }

  onSave(spirit: SpiritRequiredProps | SpiritModel) {
    if ('id' in spirit) {
      this.updateSpirit(spirit);
    } else {
      this.saveSpirit(spirit);
    }
  }

  saveSpirit(spiritProps: SpiritRequiredProps) {
    this.store.dispatch(SpiritsPageActions.createSpirit({ spirit: spiritProps }))
  }

  updateSpirit(spirit: SpiritModel) {
    this.store.dispatch(SpiritsPageActions.updateSpirit({
      spiritId: spirit.id,
      changes: spirit
    }))
  }

  onDelete(spirit: SpiritModel) {
    this.store.dispatch(SpiritsPageActions.deleteSpirit({ spiritId: spirit.id }))
  }
  
}