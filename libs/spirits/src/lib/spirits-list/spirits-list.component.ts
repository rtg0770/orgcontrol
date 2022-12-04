import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { SpiritModel } from '@agave-spirits/shared-models';

@Component({
  selector: 'agave-spirits-spirits-list',
  templateUrl: './spirits-list.component.html',
  styleUrls: ['./spirits-list.component.scss'],
})

export class SpiritsListComponent {

  @Input() spirits: SpiritModel[] | null = [];
  @Input() readonly: boolean | null = false;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
  
}