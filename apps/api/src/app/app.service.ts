import { Get, Injectable } from '@nestjs/common';
import { SpiritModel, SpiritRequiredProps } from '@agave-spirits/shared-models';
import * as uuid from 'uuid';

@Injectable()
export class AppService {
  spirits: SpiritModel[] = [];
  @Get()
  getData() {
    return this.spirits;
  }
}