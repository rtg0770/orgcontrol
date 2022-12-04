import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StockGoodsModel, Unit, SpiritModel, WarehouseModel } from '@agave-spirits/shared-models';

@Component({
  selector: 'agave-spirits-stockgoods-detail',
  templateUrl: './stockgoods-detail.component.html',
  styleUrls: ['./stockgoods-detail.component.scss'],
})

export class StockgoodsDetailComponent {
  @Input() spirits: SpiritModel[] | null = [];
  @Input() warehouses: WarehouseModel[] | null = [];
  keys = Object.keys;
  baseUnits = Unit;

  originalStockgood: StockGoodsModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  stockgoodForm = new FormGroup({
    warehouse: new FormControl(),
    product: new FormControl(),
    description: new FormControl(''),
    stock: new FormControl(),
    baseUnit: new FormControl()
  });

  @Input() set stockgood(stockgood: StockGoodsModel | null) {
    this.stockgoodForm.reset();
    this.originalStockgood = undefined;

    if(stockgood) {
      this.stockgoodForm.setValue({
        warehouse: stockgood.warehouse,
        product: stockgood.product,
        description: stockgood.description,
        stock: stockgood.stock,
        baseUnit: stockgood.baseUnit
      });
      this.originalStockgood = stockgood;
    }
  }

  onSubmit( stockgood: StockGoodsModel) {
    this.save.emit({...this.originalStockgood, ...stockgood });
    console.log(this.spirits)
  }

}