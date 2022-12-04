import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SpiritModel } from '@agave-spirits/shared-models';

@Component({
  selector: 'agave-spirits-spirit-detail',
  templateUrl: './spirit-detail.component.html',
  styleUrls: ['./spirit-detail.component.scss'],
})
export class SpiritDetailComponent {
  originalSpirit: SpiritModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  spiritForm = new FormGroup({
    brandName: new FormControl(''),
    category: new FormControl(''),
    class: new FormControl(''),
    agave: new FormControl(''),
    image: new FormControl(''),
    alcoholGrade: new FormControl(),
    kindOfBottle: new FormControl(),
    atributes: new FormControl(''),
    priceOnline: new FormControl(0),
    priceHoreca: new FormControl(0),
    priceMax: new FormControl(0)
  });

  @Input() set spirit(spirit: SpiritModel | null) {
    this.spiritForm.reset();
    this.originalSpirit = undefined;

    if (spirit) {
      this.spiritForm.setValue({
        brandName: spirit.brandName,
        category: spirit.category,
        class: spirit.class,
        agave: spirit.agave,
        image: spirit.image,
        alcoholGrade: spirit.alcoholGrade,
        kindOfBottle: spirit.kindOfBottle,
        atributes: spirit.atributes,
        priceOnline: spirit.priceOnline,
        priceHoreca: spirit.priceHoreca,
        priceMax: spirit.priceMax
      });

      this.originalSpirit = spirit;
    }
  }
  onSubmit(spirit: SpiritModel) {
    this.save.emit({ ...this.originalSpirit, ...spirit });
  }
  
}
