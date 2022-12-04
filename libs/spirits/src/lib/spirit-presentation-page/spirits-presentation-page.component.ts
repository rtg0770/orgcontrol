import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpiritsApiActions, SpiritsPresentationPageActions } from '@agave-spirits/spirits/actions';
import { SpiritModel } from '@agave-spirits/shared-models';
import { selectActiveSpirit, selectAllSpirits } from '@agave-spirits/shared-state-spirits';

@Component({
  selector: 'agave-spirits-spirits-presentation-page',
  templateUrl: './spirits-presentation-page.component.html',
  styleUrls: ['./spirits-presentation-page.component.scss'],
})
export class SpiritsPresentationPageComponent implements OnInit {
  spirits$: Observable<SpiritModel[]>;

  constructor(private store: Store) {
    this.spirits$ = store.select(selectAllSpirits);
    
  }
  ngOnInit() {
    this.store.dispatch(SpiritsPresentationPageActions.enter());
  }
  onSelect(spirit: SpiritModel) {
    this.store.dispatch(SpiritsPresentationPageActions.selectSpirit({ spirit }))
  }
}