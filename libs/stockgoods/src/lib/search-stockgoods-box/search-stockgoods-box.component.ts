import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'agave-spirits-search-stockgoods-box',
  templateUrl: './search-stockgoods-box.component.html',
  styleUrls: ['./search-stockgoods-box.component.scss'],
})
export class SearchStockgoodsBoxComponent {
  @Output() search = new EventEmitter();
}
