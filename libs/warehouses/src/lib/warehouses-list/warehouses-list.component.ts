import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WarehouseModel } from '@agave-spirits/shared-models';

@Component({
  selector: 'agave-spirits-warehouses-list',
  templateUrl: './warehouses-list.component.html',
  styleUrls: ['./warehouses-list.component.scss'],
})

export class WarehousesListComponent {
  @Input() warehouses: WarehouseModel[] | null = [];
  @Input() currentWarehouse: WarehouseModel | null = null;
  @Input() readonly: boolean | null = false;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
  selectedIndex: any = null;
  setIndex(index: any) {
    this.selectedIndex = index;
  }
}