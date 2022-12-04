import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WarehouseModel, Unit } from '@agave-spirits/shared-models';

@Component({
  selector: 'agave-spirits-warehouse-detail',
  templateUrl: './warehouse-detail.component.html',
  styleUrls: ['./warehouse-detail.component.scss'],
})
export class WarehouseDetailComponent {
  contactInfoToggled?: boolean = false;

  keys = Object.keys;
  baseUnits = Unit;

  originalWarehouse: WarehouseModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  warehouseContactForm = new FormGroup({
    location: new FormControl(''),
    telephone: new FormControl(''),
    email: new FormControl(''),
    contactName: new FormControl('')
  });

  
  @Input() set warehouse(warehouse: WarehouseModel | null) {
    this.warehouseContactForm.reset();
    this.originalWarehouse = undefined;

    if (warehouse) {
      this.warehouseContactForm.setValue({
        location: warehouse.location,
        telephone: warehouse.telephone,
        email: warehouse.email,
        contactName: warehouse.contactName
      });

      this.originalWarehouse = warehouse;
    }
  }
  
  onSubmit(warehouse: WarehouseModel) {
    this.save.emit({ ...this.originalWarehouse, ...warehouse });  
  }

  
clickToToggle(){
    this.contactInfoToggled = !this.contactInfoToggled;       
}

}