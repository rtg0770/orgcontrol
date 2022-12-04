/* eslint-disable @angular-eslint/no-output-native */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { SpiritsApiActions, SpiritsPresentationPageActions } from '@agave-spirits/spirits/actions';
import { SpiritModel } from '@agave-spirits/shared-models';
import { selectActiveSpirit, selectAllSpirits } from '@agave-spirits/shared-state-spirits';

@Component({
  selector: 'agave-spirits-spirit-list-presentation',
  templateUrl: './spirit-list-presentation.component.html',
  styleUrls: ['./spirit-list-presentation.component.scss'],
})
export class SpiritListPresentationComponent {
  @Input() spirits: SpiritModel[] | null = [];
  @Input() readonly: boolean | null = false;
  @Output() select = new EventEmitter();
}