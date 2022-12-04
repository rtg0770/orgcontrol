export interface SpiritModel {
  id: string;
  brandName: string;
  category: string;
  class: string;
  agave: string;
  image: string;
  alcoholGrade: number;
  kindOfBottle: number;
  atributes: string;
  priceOnline: number;
  priceHoreca: number;
  priceMax: number;
}

export type SpiritRequiredProps = Pick<SpiritModel, 'brandName' | 'category' | 'class' | 'agave' | 'alcoholGrade' | 'atributes' | 'kindOfBottle' | 'priceOnline' | 'priceHoreca' | 'priceMax' | 'image'>