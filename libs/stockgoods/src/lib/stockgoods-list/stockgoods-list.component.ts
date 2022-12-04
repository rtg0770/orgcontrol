import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StockGoodsModel } from '@agave-spirits/shared-models';

@Component({
  selector: 'agave-spirits-stockgoods-list',
  templateUrl: './stockgoods-list.component.html',
  styleUrls: ['./stockgoods-list.component.scss'],
})
export class StockgoodsListComponent {
  @Input() stockGoods: StockGoodsModel[] | null = [];
  readonly?:boolean = false;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() delete = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() select = new EventEmitter();
}